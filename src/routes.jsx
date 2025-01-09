import React from "react";
import Home from "./pages/Home";
import appConstants from "./constants/appConstants";
import MainPage from "./pages/Timeline/MainPage";

const routes = [
    {
      path: "/",
      component: <Home />,
      allowedUser: [
        
        appConstants.UNKNOWN,
      ],
    },
    {
      path: "/timeline",
      component: <MainPage />,
      allowedUser: [
        
        appConstants.UNKNOWN,
      ],
    },
];

export default routes;