import "./MainLogo.scss";

import { Link } from "react-router-dom";
import { ReactComponent as MainLogoImage } from "./../../images/logo.svg";

function MainLogo({children}) {
  return (
    <Link to="/" className="main-logo">
      {children}
      <MainLogoImage />
    </Link>
  )
}

export default MainLogo;
