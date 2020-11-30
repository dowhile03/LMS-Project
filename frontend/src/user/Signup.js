import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {              
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    errors: "",
    success: false,
  });

  const { name, email, password, errors, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, errors: false, [name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, errors: false });
    signup({ name, email, password })
      .then(data => {
        if (data.errors) {
          setValues({ ...values, errors: data.errors, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            errors: "",
            success: true
          });
        }
      })
      .catch(()=>console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
          {/* <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>*/} 

            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>

            <button onClick={onSubmit} className="btn btn-warning btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account Has been created successFully. Please
        <Link to="/signin">Login Here</Link>
      </div>
      </div>
      </div>
    );
  };

  const errorMessage = () => {
   return(
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">

    <div
    className="alert alert-danger"
    style={{ display: errors ? "" : "none" }}
  >
    {errors}
  </div>
  </div>
  </div>
   );
  };

  return (
    <Base title="Sign up page" description="A page for Parent/Admin to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}

      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
