import React, { useEffect, useState } from "react";

import Item from "../components/Item";

import "./Home.css";

const Home = () => {
  const [homeItems, setHomeItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const resJson = await res.json();
        setHomeItems(resJson.items);
      })
      .catch((err) => {
        console.log("err here");
        console.error(err);
      });
  }, []);

  return (
    <>
      <ul className="home__items-list">
        {homeItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
