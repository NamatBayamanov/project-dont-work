import { Link, useMatch } from "react-router-dom";
import classes from "./NavItem.module.css";
function NavItem({children, url}) {
  return (
    <li className={classes.NavItem}>
      <Link to={url} className={useMatch(url) ? classes.active : null} >{children}</Link>
    </li>
  );
}

export default NavItem;
