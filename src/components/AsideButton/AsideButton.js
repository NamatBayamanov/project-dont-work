import classes from "./AsideButton.module.css";
import { FaPhp } from "react-icons/fa";

function AsideButton({right, left, children}) {
  return ( 
    <button className={`${classes.AsideButton} ${right ? classes.right : ""} ${left ? classes.left : ""}`} >
    
      <span>
        {children}
      </span>
      <span>
      <FaPhp/>
      </span>
    </button>
  );
}

export default AsideButton;