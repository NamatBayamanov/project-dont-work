import { FaAlignJustify } from "react-icons/fa";
import classes from "./NavToggle.module.css";

function NavToggle() {
  
  return ( 
    <div className={classes.NavToggle}>
      <span>
        <FaAlignJustify/>
      </span>
    </div>
  );
}

export default NavToggle;