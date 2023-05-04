import { createBrowserRouter } from "react-router-dom";
import Chart from "../Graph/Chart";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Chart />,
  },
]);
