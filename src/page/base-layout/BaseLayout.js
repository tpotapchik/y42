import "./BaseLayout.scss";
import Header from "../../block/header/Header";

function BaseLayout({children}) {
  return (
    <div className="page">
      <Header/>
      <div className="page__inner">
        {children}
      </div>
    </div>
  );
}

export default BaseLayout;
