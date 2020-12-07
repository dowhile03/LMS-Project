import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { "background-color": "#FFCE74" };
  } else {
    return { color: "#FFFFFF" }; 
  }
};

const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
      
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 2 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/teacher/dashboard")}
              className="nav-link"
              to="/teacher/dashboard"
            >
              Teacher Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Parents Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
           {/* <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Parent SignUp
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
              Parent Login
              </Link>
            </li>
          </Fragment>
        )}

       

        {!isAuthenticated() && (
          <Fragment>
           {/* <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Parent SignUp
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                style={currentTab(history, "/Tsignin")}
                className="nav-link"
                to="/Tsignin"
              >
              Teacher Login
              </Link>
            </li>
          </Fragment>
        )}

        {!isAuthenticated() && (
          <Fragment>
          {/* <li className="nav-item">
              <Link
                style={currentTab(history, "/Usignup")}
                className="nav-link"
                to="/Usignup"
              >
                U.SignUp
              </Link>
            </li> */} 
           <li className="nav-item">
              <Link
                style={currentTab(history, "/Usignin")}
                className="nav-link"
                to="/Usignin"
              >
                Student Login
              </Link>
            </li> 
          </Fragment>
        )}

        {!isAuthenticated() && (
          <Fragment>
           
            <li className="nav-item ml-3">
              <Link
                style={currentTab(history, "/createlogin")}
                className="nav-link"
                to="/createlogin"
              >
              Create Login
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
