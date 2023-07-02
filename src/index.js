import React from 'react';
import ReactDOM from 'react-dom/client';
//
import reportWebVitals from './reportWebVitals';
import './index.css';




import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from './Components/ProfileClass';
import { Provider } from 'react-redux';
import Store  from './Utils.js/Store';
import Cart from './Components/Cart';




const AppLayout = () => {
  return (
    <Provider store={Store}>
      <Header />
      <Outlet />
      <Footer />
     </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "about",
        element: <About />,
        children: [{ // nested routing
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


reportWebVitals();
