import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  displayName: string;
  pathTo: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { pathTo, displayName, icon } = props

  //const { palette } = useTheme();
  const theme = useTheme();

  return (
    <li>
      <ListItem component={Link} to={pathTo}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText 
          style={{ 
            textDecoration: "none",
          }} 
          sx={{ color: theme.palette.grey[200] }}
          primary={displayName} 
        />
      </ListItem>
    </li>
  );
}

export default ListItemLink