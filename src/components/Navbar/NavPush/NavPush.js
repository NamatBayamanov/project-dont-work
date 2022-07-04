import { Link } from "react-router-dom";
import classes from "./NavPush.module.css";
function NavPush({children}) {
  return ( 
    <li className={classes.NavPush}>
      <Link to="">
        {children}
      </Link>
    </li>
  );
}

export default NavPush;