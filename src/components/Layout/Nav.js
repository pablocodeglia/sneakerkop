import { Link, NavLink } from "react-router-dom";
import SneakerIcon from "../UI/SneakerIcon";
import classes from "./Nav.module.css";
import NavCartButton from "./NavCartButton";

const Nav = () => {
  return (
    <header className={classes.nav}>
      <div>
        <div className={classes.logo}>
          <Link to="/">
            <SneakerIcon />
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/catalog/"}>PRODUCTS</NavLink>
          </li>
          <NavLink to={"/cart/"}>
            <li>
              <NavCartButton />
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
