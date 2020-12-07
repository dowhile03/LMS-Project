import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const teacherLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Teacher Navigation</h4>
        <ul className="list-group">
         
         
          <li className="list-group-item">
            <Link to="#" className="nav-link text-primary">
              <strong>List of work for teachers</strong>
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

  const teacherRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Teacher Info</h4>
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
          <span className="badge badge-danger mr-2">Teacher Area</span>
          
        </li>

        </ul>
      </div>
    );
  };

  return (
    <Base
      className="container bg-success p-4"
      title="Welcome  Teacher!! "
      description="Teacher DashBoard for managing their work"
    >
      <div className="row">
        <div className="col-3">{teacherLeftSide()}</div>
        <div className="col-9">{teacherRightSide()}</div>
      </div>
    </Base>
  );
};

export default TeacherDashboard;
