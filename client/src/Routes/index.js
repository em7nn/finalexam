import {createBrowserRouter} from "react-router-dom";
import Detailpage from "../Components/HomeComponents/ThreeSection/DetailPage";
import AddPage from "../Pages/AddPage";
import HomePage from "../Pages/HomePage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/addpage",
        element: <AddPage/>,
      },
      {
        path: "/details/:id",
        element: <Detailpage/>,
      },
      
      
  ]);

export { router }