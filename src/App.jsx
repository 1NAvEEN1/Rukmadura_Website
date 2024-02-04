import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./theme";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";

const Layout = Loadable(lazy(() => import("./layout")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const ContactUs = Loadable(lazy(() => import("./pages/ContactUs")));
const AboutUs = Loadable(lazy(() => import("./pages/AboutUs")));
const KidsPlayArea = Loadable(lazy(() => import("./pages/KidsPlayArea")));
const TreeHouses = Loadable(lazy(() => import("./pages/TreeHouses")));
const Chalets = Loadable(lazy(() => import("./pages/Chalets")));
const TinyHouses = Loadable(lazy(() => import("./pages/TinyHouses")));
const Gallery = Loadable(lazy(() => import("./pages/Gallery")));

const router = createBrowserRouter([
  {
    path: "/new",
    element: <Layout />,
    children: [
      {
        path: "/new",
        element: <Home />,
      },
      {
        path: "/new/home",
        element: <Home />,
      },
      {
        path: "/new/services",
        children: [
          {
            path: "kids_play_area",
            element: <KidsPlayArea />,
          },
          {
            path: "tree_houses",
            element: <TreeHouses />,
          },
          {
            path: "chalets",
            element: <Chalets />,
          },
          {
            path: "tiny_houses",
            element: <TinyHouses />,
          },
        ],
      },
      {
        path: "/new/about",
        element: <AboutUs />,
      },
      {
        path: "/new/contacts",
        element: <ContactUs />,
      },
      {
        path: "/new/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
