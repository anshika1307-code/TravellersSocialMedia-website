import React from "react";
// import { useAuth } from "./utils/useAuthClient";
import ErrorPage from "./error/ErrorPage";

const UserBasedRoute = ({ component: Component, allowedUser }) => {
//   const { userType } = useAuth();
//   const isAuthorized = allowedUser.includes(userType);
//   if (!isAuthorized) {
//     return <ErrorPage></ErrorPage>
//   }
//   return isAuthorized && Component;
const isAuthorized = true;
return isAuthorized && Component;
};

export default UserBasedRoute;