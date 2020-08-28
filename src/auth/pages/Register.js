import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import "./Auth.css";

const Register = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        fullname: "Testko Testovic",
        email: "test@test.com",
        password: "test123",
      }}
      onSubmit={(values) => {
        console.log(values);
        fetch("http://localhost:5000/api/users/register", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({
            fullname: values.fullname,
            email: values.email,
            password: values.password,
          }),
        })
          .then((res) => {
            console.log(res.json());
            history.push("/");
          })
          .catch((err) => {
            console.log("Login failed");
            console.error(err);
          });
      }}
    >
      <Form className="auth__form">
        <label htmlFor="fullname">Full name</label>
        <Field id="fullname" type="text" name="fullname" />
        <label htmlFor="email">Email</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="pasword" type="password" name="password" />
        <button type="submit" className="auth__submit">
          Register
        </button>
        <Link to="/login" className="auth__other">
          Login
        </Link>
      </Form>
    </Formik>
  );
};

export default Register;
