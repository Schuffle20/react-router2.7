import { useRoutes } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import NotFound from "../pages/NotFound.jsx";

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
        {
          path: "/blogs/:id",
          element: <BlogDetail />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ],
    },
  ]);
};

export default Router;