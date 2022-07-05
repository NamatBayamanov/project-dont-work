import { FaAlignJustify } from "react-icons/fa";
import classes from "./NavToggle.module.css";

function NavToggle({toggle}) {
  
  return ( 
    <div className={classes.NavToggle} onClick={toggle}>
      <span>
        <FaAlignJustify/>
      </span>
    </div>
  );
}

export default NavToggle;