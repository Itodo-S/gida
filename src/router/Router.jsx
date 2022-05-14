import {BrowserRouter,Routes} from "react-router-dom";
import HomeRoute from "./homeRoute/HomeRoute";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            {HomeRoute()}
        </Routes>
    </BrowserRouter>
  )
}

export default Router