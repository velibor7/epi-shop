import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import FileUpload from "../../shared/components/FormElements/FileUpload";

import "./NewItem.css";

const NewItem = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        title: "some title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "1000",
        category: "other",
        image: "",
      }}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("category", values.category);
        formData.append("image", values.image);

        console.log(values);
        fetch("http://localhost:5000/api/items", {
          method: "POST",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          body: formData,
        })
          .then((res) => {
            console.log(res.json());
            history.push("/");
          })
          .catch((err) => {
            console.log("we have error");
            console.error(err);
          });
      }}
    >
      <Form className="new-item__form">
        <label htmlFor="title"> Title</label>
        <Field id="title" type="text" name="title" />

        <label htmlFor="description"> Description</label>
        <Field
          id="description"
          type="text"
          as="textarea"
          name="description"
          rows="20"
        />

        <label htmlFor="price"> Price</label>
        <Field id="price" type="number" name="price" />

        <label htmlFor="category">Category</label>
        <Field name="category" as="select" id="category">
          <option value="other" defaultValue>
            Other
          </option>
          <option value="skydiving">Skydiving</option>
          <option value="snowboarding">Snowboarding</option>
          <option value="skateboarding">Skateboarding</option>
          <option value="climbing">Climbing</option>
        </Field>
        <label htmlFor="image">Please select an image: </label>
        <Field name="image" component={FileUpload}></Field>

        <button type="submit" className="new-item__submit">
          Add item
        </button>
      </Form>
    </Formik>
  );
};

export default NewItem;
