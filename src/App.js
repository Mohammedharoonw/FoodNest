// import React from "react";

// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Error from "./Components/Error";
// import Contact from "./Components/Contact";
// import Login from "./Components/Login";
// import RestaurantMenu from "./Components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing



// // AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
// const App = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Outlet />
//       <Footer />
//     </React.Fragment>
//   );
// };

// // call createBrowserRouter for routing different pages
// const appRouter = createBrowserRouter([
//   {
//     path: "/", // show path for routing
//     element: <App />, // show component for particular path
//     errorElement: <Error />, // show error component for path is different
//     children: [
//       // show children component for routing
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestaurantMenu />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);
// export default App;
