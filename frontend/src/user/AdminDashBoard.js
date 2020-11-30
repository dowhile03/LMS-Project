import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Parent Navigation</h4>
        <ul className="list-group">
         
         
          <li className="list-group-item">
            <Link to="/Usignup" className="nav-link text-success">
              Create Students
            </Link>
          </li>
        {/*<li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Students
            </Link>
          </li> */}  
         
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Parent Info</h4>
        <ul className="list-group">
         {/*<li className="list-group-item">
            <span className="badge badge-warning mr-2">Name:</span>
            {name}
          </li> */} 
          <li className="list-group-item">
            <span className="badge badge-warning mr-2">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
          <span className="badge badge-danger mr-2">Parent Area</span>
          
        </li>

        </ul>
      </div>
    );
  };

  return (
    <Base
      className="container bg-primary p-4"
      title="Welcome  Parent!! "
      description="Manage All your Students here"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
