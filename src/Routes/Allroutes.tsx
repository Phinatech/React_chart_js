import { createBrowserRouter } from "react-router-dom";
import Chart from "../Graph/Chart";
import { Barchat } from "../Page/Barchat";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Chart />,
  },

  {
    path: "/bar",
    element: <Barchat />,
  },
]);
