import Navbar from "../Navbar/Navbar";
// import NavToggle from "../Navbar/NavToggle/NavToggle";
import classes from "./Toolbar.module.css";

function Toolbar({toggle}) {
  return ( 
    <div className={classes.Toolbar}>
      <Navbar toggle={toggle}/>
      
{/* 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
    </div>
  );
}

export default Toolbar;