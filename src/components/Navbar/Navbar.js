import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import NavPush from "./NavPush/NavPush";
import NavPush2 from "./NavPush2/NavPush2";
import NavToggle from "./NavToggle/NavToggle";
function Navbar({toggle}) {
  return ( 
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              
              <NavItem url="/lane-sale" active>
                Lane Sale
              </NavItem>
              <NavItem url="/communication">
                Communication
              </NavItem>
              <NavPush url="/build-your-own">
              Build your own
              </NavPush>
            
              
              <NavPush2 active url="/Pax.World">
                Pax.World
              </NavPush2>

              <NavItem url="/governance">
                Governance
              </NavItem >
              <NavItem url="/roadmap">
              Roadmap
              </NavItem>
              <NavItem url="/partners">
              Partners

              </NavItem>

              <NavToggle toggle={toggle}/>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;