import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import "./Auth.css";

const Login = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "test@test.com",
        password: "test123",
      }}
      onSubmit={(values) => {
        console.log(values);
        fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
          .then((res) => {
            console.log(res.json());
            history.push("/");
          })
          .catch((err) => {
            console.log("login failed");
            console.error(err);
          });
      }}
    >
      <Form className="new-item__form">
        <label htmlFor="email">Email</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="pasword" type="password" name="password" />
        <button type="submit" className="new-item__submit">
          Login
        </button>
        New here? <Link to="/register">Register</Link>
      </Form>
    </Formik>
  );
};

export default Login;
