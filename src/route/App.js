import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../page/base-layout/BaseLayout";
import Home from "../page/home/Home";
import Platform from "../page/platform/Platform";
import Solution from "../page/solution/Solution";
import Blog from "../page/blog/Blog";
import PageNotFound from "../page/error/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="platform" element={ <Platform/> }/>
          <Route path="solution" element={ <Solution/> }/>
          <Route path="blog" element={ <Blog/> }/>
          <Route path="pricing" element={ <Home/> }/>
          <Route path="*" element={ <PageNotFound/>}/>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
