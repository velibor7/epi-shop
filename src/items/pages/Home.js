import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import Item from "../components/Item";
import ItemDetail from "../components/ItemDetail";
import Backdrop from "../../shared/components/UIElements/Backdrop";

import { CartContext } from "../../shared/context/cart-context";
//import { AuthContext } from "../../shared/context/auth-context";

import "./Home.css";
import Spinner from "../../shared/components/UIElements/Spinner";

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

  const deleteItemHandler = (id) => {
    console.log("delete handler");
    console.log("id", id);
    fetch(`http://localhost:5000/api/items/${id}`, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        // "Authorization": "Bearer " + auth.token ?? smth like this
      },
    })
      .then(() => {
        setDetailOpen(false);
        window.location.reload();
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {detailOpen && <Backdrop onClick={closeItemDetailHandler} />}
      <ItemDetail
        show={detailOpen}
        item={item}
        onDelete={() => deleteItemHandler(item.id)}
      />
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
