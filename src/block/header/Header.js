import { useState } from "react";

import "./Header.scss";

import MainLogo  from "./../../component/MainLogo/MainLogo";
import Navigation  from "./../../component/Navigation/Navigation";
import Login  from "./../login/Login";

function Header() {
  const [isOpenedMenu, setOpenedMenu] = useState(false);

  const onClickHandler = () => {
    setOpenedMenu(!isOpenedMenu);
  };

  const activeClass = `${isOpenedMenu ? "active" : ""}`;

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__burger"
             onClick={onClickHandler}>
          <div className={`header__burger-icon ${activeClass}`}></div>
        </div>
        <MainLogo />
        <Navigation NavigationClass={activeClass} />
        <Login />
      </div>
    </header>
  );
}

export default Header;
