import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import Item from "../components/Item";
import ItemDetail from "../components/ItemDetail";
import Backdrop from "../../shared/components/UIElements/Backdrop";

import { CartContext } from "../../shared/context/cart-context";
//import { AuthContext } from "../../shared/context/auth-context";

import "./Home.css";

const Home = () => {
  const history = useHistory();
  const { iid } = useParams();

  const [homeItems, setHomeItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  const [detailOpen, setDetailOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [item, setItem] = useState(null);

  // useEffect(() => {
  // console.log(iid);
  // }, [iid]);

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

  /*
  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${itemId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const resJson = await res.json();
      console.log(resJson);
    });
  }, [itemId]);
  */

  const closeItemDetailHandler = () => {
    setDetailOpen(false);
    history.push("/");
  };

  const openItemDetailHandler = (item) => {
    // ovde sigurno znamo da imamo item i sve njegove podatke
    setItemId(item.id);
    setItem(item);
    setDetailOpen(true);
    history.push(`/items/${item.id}`);
  };

  return (
    <>
      {detailOpen && <Backdrop onClick={closeItemDetailHandler} />}
      <ItemDetail show={detailOpen} item={item}></ItemDetail>

      <ul className="home__items-list">
        {homeItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            onOpen={() => openItemDetailHandler(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
