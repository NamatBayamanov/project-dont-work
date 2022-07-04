import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";
function NavItem({children}) {
  return (
    <li className={classes.NavItem}>
      <Link to="/">{children}</Link>
    </li>
  );
}

export default NavItem;
