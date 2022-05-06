import { useLocation } from "react-router-dom";

function Solution() {
  const location = useLocation();

  return (
    <div className="container">
      <section className="page-introduction page-introduction--modified">
        <h1 className="common-title">Page "{location.pathname}" is under construction</h1>
      </section>
    </div>
  );
}

export default Solution;
