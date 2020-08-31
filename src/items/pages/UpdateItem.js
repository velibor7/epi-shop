import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import FileUpload from "../../shared/components/FormElements/FileUpload";

const UpdateItem = () => {
  const itemId = useParams().iid;
  const [loadedItem, setloadedItem] = useState({});
  const history = useHistory();

  let loadedValues = {
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${itemId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const resJson = await res.json();
      setloadedItem(resJson.item);
      loadedValues.title = resJson.item.title;
      loadedValues.description = resJson.item.description;
      loadedValues.price = resJson.item.price;
      loadedValues.category = resJson.item.category;
      loadedValues.image = resJson.item.image;
      console.log(loadedItem);
      console.log(loadedValues);
    });
  }, [itemId]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={loadedValues}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("category", values.category);
        formData.append("image", values.image);

        console.log(values);
        fetch("http://localhost:5000/api/items", {
          method: "PATCH",
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

export default UpdateItem;
