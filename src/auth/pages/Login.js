import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { AuthContext } from "../../shared/context/auth-context";

import "./Auth.css";

const Login = () => {
  const history = useHistory();

  const auth = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: "test1@test.com",
        password: "test123",
      }}
      onSubmit={(values) => {
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
          .then(async (res) => {
            const resJson = await res.json();
            // console.log(resJson.userId);
            auth.login(resJson.userId, resJson.token);
            history.push("/");
          })
          .catch((err) => {
            console.log("login failed");
            console.error(err);
          });
      }}
    >
      <Form className="auth__form">
        <label htmlFor="email">Email</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="pasword" type="password" name="password" />
        <button type="submit" className="auth__submit">
          Login
        </button>
        <Link to="/register" className="auth__other">
          Register
        </Link>
      </Form>
    </Formik>
  );
};

export default Login;
