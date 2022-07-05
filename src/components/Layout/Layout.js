import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

function Layout() {
  return ( 
    <div className={classes.Layout}>
      <Toolbar/>
    </div>
  );
}

export default Layout;