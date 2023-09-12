import { React, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import AboutClass from "./components/AboutClass";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";

const AboutClass = lazy(() => import("./components/AboutClass"));
const Instamart = lazy(() => import("./components/Instamart"));
const App = () => {
  const [user, setUser] = useState({
    name: "Saugat",
    email: "njsaugat@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user,setUser:setUser }}>
      <Header />
      {/* <Title /> */}
      <Outlet />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutClass />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/insta-mart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  //   errorElement: <Error />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
