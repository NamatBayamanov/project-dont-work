import classes from "./NavPush2.module.css";
import { Link } from "react-router-dom";
function NavPush2({children}) {
  return (
    <li className={classes.NavPush2}>
      <Link to="/">{children}</Link>
    </li>
  );
}

export default NavPush2;
