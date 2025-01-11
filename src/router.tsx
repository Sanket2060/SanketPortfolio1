// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Blog from "./components/Blog";
import App from "./App";
import Contactme from "./components/Contactme";
import AdditionalDescription from "./components/AdditionalDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "",
        element: (
          <>
            <AdditionalDescription />
            <Projects />
            <Experience />
            <Tools />
            <Contactme />
          </>
        ),
      },
      {
        path: "projects",
        element: (
          <>
            <Projects />
            <Contactme />
          </>
        ),
      },
      {
        path: "/experience",
        element: (
          <>
            <Experience />
            <Contactme />
          </>
        ),
      },
      {
        path: "/tools",
        element: (
          <>
            <Tools />
            <Contactme />
          </>
        ),
      },
      {
        path: "/blog",
        element: (
          <>
            <Blog />
            <Contactme />
          </>
        ),
      },
    ],
  },
]);

export default router;
