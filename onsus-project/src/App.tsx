import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ROUTES from "./routes/index";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={router} />
     </>
  );
}

export default App;
