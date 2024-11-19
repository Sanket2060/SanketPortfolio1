// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Blog from "./components/Blog";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

export default router;
