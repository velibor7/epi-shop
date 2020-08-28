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
        description: "some description",
        price: "54543",
        category: "skydiving",
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
        <Field id="description" type="text" as="textarea" name="description" />

        <label htmlFor="price"> Price</label>
        <Field id="price" type="number" name="price" />

        <label htmlFor="category">Category</label>
        <Field name="category" as="select" id="category">
          <option value="other" defaultValue>
            Other
          </option>
          <option value="skydiving">Skydiving</option>
          <option value="snowboarding">Snowboarding</option>
        </Field>

        <Field name="image" component={FileUpload}></Field>

        <button type="submit" className="new-item__submit">
          Add item
        </button>
      </Form>
    </Formik>
  );
};

export default NewItem;
