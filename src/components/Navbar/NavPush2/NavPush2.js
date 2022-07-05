import classes from "./NavPush2.module.css";
import { Link, useMatch } from "react-router-dom";
function NavPush2({children, url}) {
  return (
    <li className={classes.NavPush2}>
      <Link className={useMatch(url) ? classes.active : null} to={url}>{children}</Link>
    </li>
  );
}

export default NavPush2;
