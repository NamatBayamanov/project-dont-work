import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

function Layout() {

  const [switcher, setSwitcher] = useState(false);

  function onToggle(event) {
    setSwitcher(!switcher);
  }
  return ( 
    <div className={classes.Layout}>
      <Toolbar toggle={onToggle}/>
      <Drawer state={switcher} toggle={onToggle} />
    </div>
  );
}

export default Layout;