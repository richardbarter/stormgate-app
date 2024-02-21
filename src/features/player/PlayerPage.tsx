import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchPlayerById } from "./playerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


const PlayerPage = () => {
  const dispatch = useAppDispatch()
  
  const { id } = useParams<{ id: string }>();
  const [searchId, setSearchId] = useState('')
  
  console.log('player page, player id is ', id);
  //could just use useEffect if this is only place player stats will be used?
  const player = useAppSelector((state) => state.player.player);
  const status = useAppSelector((state) => state.player.status);
  const error = useAppSelector((state) => state.player.error);

  // return (
  //   <section className="player-page">
  //     <Container>
  //       test player page
  //     </Container>
  //   </section>
  // );

  useEffect(() => {
    if (id){
      dispatch(fetchPlayerById(id))
    }
  }, [dispatch, id])

  if (id) {
    // Conditional rendering based on fetch status
    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
      <Container>
        {/* Render player data */}
        {player && (
          <div>test
            {/* <h1>{player.nickname}</h1> */}
          </div>
        )}
      </Container>
    );
  } else {
    // Render search input when no ID is provided in the URL
    return (
      <Container>
        Some Search needs to go here
        {/* <TextField
          label="Player ID"
          variant="outlined"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={!inputId}
        >
          Search
        </Button> */}
      </Container>
    );
  }

};

export default PlayerPage;
