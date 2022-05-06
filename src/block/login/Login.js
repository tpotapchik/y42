import "./Login.scss";

import { ReactComponent as LoginImage } from "./../../images/login.svg";
import Button from "./../../component/Button/Button";

function Login() {
  const click=()=>{
    console.log("Click!");
  };
  return (
    <div className="login-group">
      <Button handleClick={click} buttonClass="button--link button--desktop-only">Log in</Button>
      <Button handleClick={click} buttonClass="button--primary button--desktop-only">Sign Up</Button>
      <div className="login-group__mobile-item">
        <LoginImage/>
      </div>
    </div>
  );
}

export default Login;
