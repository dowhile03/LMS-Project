import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const CreateLogin = () => {
  const teacherLoginBtn = () => {
    return (
      <div>
        <div>
          <Link to="/Tsignup" className="btn btn-warning rounded btn-lg ml-5">Teacher SignUp</Link>
        </div>
        <div>
          <Link to="/signup" className="btn btn-success rounded btn-lg pull-right mr-5">Parents SignUp</Link>
        </div>
      </div>
    );
  };

  return (
    <Base
      title="Create Login"
      description="This Page is to create the Logins For Teachers and Parents"
>
      {teacherLoginBtn()}

    </Base>
  );
};

export default CreateLogin;
