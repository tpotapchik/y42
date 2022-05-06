import "./Header.scss";

import MainLogo  from "./../../component/MainLogo/MainLogo";
import Navigation  from "./../../component/Navigation/Navigation";
import Login  from "./../login/Login";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__burger">
          <div className="header__burger-icon"></div>
        </div>
        <MainLogo />
        <Navigation />
        <Login />
      </div>
    </header>
  );
}

export default Header;
