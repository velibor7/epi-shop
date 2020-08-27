import React, { useEffect, useState, useContext } from "react";

import Item from "../components/Item";

import { CartContext } from "../../shared/context/cart-context";
import "./Home.css";

const Home = () => {
  const [homeItems, setHomeItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

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
      <div>{cartItems}</div>
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