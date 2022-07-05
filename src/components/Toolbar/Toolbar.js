import Navbar from "../Navbar/Navbar";
import classes from "./Toolbar.module.css";

function Toolbar() {
  return ( 
    <div className={classes.Toolbar}>
      <Navbar/>
    </div>
  );
}

export default Toolbar;