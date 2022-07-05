import { Link, useMatch } from "react-router-dom";
import classes from "./NavPush.module.css";
function NavPush({children, url}) {
  return ( 
    <li className={classes.NavPush}>
      <Link to={url} className={useMatch(url) ? classes.active : null}>
        {children}
      </Link>
    </li>
  );
}

export default NavPush;