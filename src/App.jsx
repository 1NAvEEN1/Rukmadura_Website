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

const router = createBrowserRouter([
  // {
  //   path: "/conferences/:shortName/:year",
  //   element: <Registration />,
  // },
  {
    path: "/Rukmadura_Website/",
    element: <Layout />,
    children: [
      {
        path: "/Rukmadura_Website/",
        element: <Home />,
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
