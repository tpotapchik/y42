import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation({NavigationClass}) {
  return (
    <nav className={`navigation navigation--desktop-only ${NavigationClass ? NavigationClass : ""}`}>
      <NavLink to="/platform" className="navigation__item">Platform</NavLink>
      <NavLink to="/solution" className="navigation__item">Solution</NavLink>
      <NavLink to="/blog" className="navigation__item">Blog</NavLink>
      <NavLink to="/pricing" className="navigation__item">Pricing</NavLink>
    </nav>
  );
}

export default Navigation;
