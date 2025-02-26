import { useRoutes } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          // index: true,
          path: "/",
          element: <Home />,
        }, // Default child route
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
};

export default Router;