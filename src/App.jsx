// import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import store from "./app/store";
import ThemeProvider from "./theme";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  // {
  //   path: "/conferences/:shortName/:year",
  //   element: <Registration />,
  // },
  {
    path: "/",
    element: <Login />,
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
