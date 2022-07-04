import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem.NavItem";
import NavPush from "./NavPush/NavPush";
import NavPush2 from "./NavPush2/NavPush2";
function Navbar() {
  return ( 
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              
              <NavItem>
                Lane Sale
              </NavItem>
              <NavItem>
                Communication
              </NavItem>
              <NavPush >
              Build your own
              </NavPush>
            
              
              <NavPush2>
                Pax.World
              </NavPush2>

              <NavItem>
                Governance
              </NavItem>
              <NavItem>
              Roadmap
              </NavItem>
              <NavItem>
              Partners

              </NavItem>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;