import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const itemId = useParams().iid;

  // useEffect(() => {
  //   fetch();
  // }, [itemId]);

  return <div>Update</div>;
};

export default UpdateItem;
