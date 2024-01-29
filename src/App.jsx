// import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import store from "./app/store";
import ThemeProvider from "./theme";
import Login from "./pages/Login/Login";
// import Layout from "./layout";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";

const Layout = Loadable(lazy(() => import("./layout")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const ContactUs = Loadable(lazy(() => import("./pages/ContactUs")));
const AboutUs = Loadable(lazy(() => import("./pages/AboutUs")));
const KidsPlayArea = Loadable(lazy(() => import("./pages/KidsPlayArea")));

const router = createBrowserRouter([
  // {
  //   path: "/conferences/:shortName/:year",
  //   element: <Registration />,
  // },
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
            element: <Home />,
          },
          {
            path: "chalets",
            element: <Home />,
          },
          {
            path: "tiny_houses",
            element: <Home />,
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
    ],
  },
]);

const App = () => {
  return (
    // <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    // </Provider>
  );
};

export default App;
