import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  displayName: string;
  pathTo: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { pathTo, displayName, icon } = props

  return (
    <li>
      <ListItem component={Link} to={pathTo}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={displayName} />
      </ListItem>
    </li>
  );
}

export default ListItemLink