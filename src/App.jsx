import React from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useAuth, AuthProvider } from "./utils/useAuthClient";
import UserBasedRoute from "./UserBasedRoute";
import routes from "./routes";
import ErrorPage from "./error/ErrorPage";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
function App() {
  // const { reloadLogin } = useAuth();

  // useEffect(() => {
  //   reloadLogin();
  // }, []);
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <UserBasedRoute
                  component={route.component}
                  allowedUser={route.allowedUser}
                />
              }
            />
          ))}
          <Route path="*" element={<ErrorPage />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;



