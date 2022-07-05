import classes from "./Drawer.module.css";
import { Link } from "react-router-dom";
function Drawer({state, toggle}) {
  return (
    <div className={classes.Drawer}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={`${classes.backdrop} ${state ? classes.none : ""}`} onClick={toggle}></div>
            <div className={`${classes.menu} ${state ? classes.open : ""}`} >
              <ul className={classes.list}>
              <li>
                  <Link to="/Pax.World">Pax.World</Link>
                </li>
                <li>
                  <Link to="/lane-sale">Land Sale</Link>
                </li>

                <li>
                  <Link to="/communication">Communication</Link>
                </li>

                <li>
                  <Link to="/build-your-own">Build your own</Link>
                </li>

                <li>
                  <Link to="/ Governance">Governance</Link>
                </li>

                <li>
                  <Link to="/Roadmap"> Roadmap</Link>
                </li>

                <li>
                  <Link to="/ Partners">Partners</Link>
                </li>

                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
