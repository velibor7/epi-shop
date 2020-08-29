import React from "react";

import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import { CartContext } from "../../shared/context/cart-context";

import cartIcon from "../../shared/icons/cart.svg";
import "./Item.css";

const Item = (props) => (
  <>
    <CartContext.Consumer>
      {(context) => (
        <li className="item__li" onClick={props.onOpen}>
          <Card className="item__card">
            <img
              src={`http://localhost:5000/${props.image}`}
              alt={props.title}
              className="item__image"
            />
            <h2 className="item__title">{props.title}</h2>
            <div className="item__bottom">
              <p className="item__price">${props.price}</p>
              <Link
                to="?category=skydiving"
                className={`item__category item__category-${props.category}`}
              >
                {props.category}
              </Link>
              <img
                title="Add to cart"
                src={cartIcon}
                alt="Add to cart"
                className="item__cart-icon"
                onClick={context.addItemToCart.bind(this, {
                  title: props.title,
                  price: props.price,
                })}
              />
            </div>
          </Card>
        </li>
      )}
    </CartContext.Consumer>
  </>
);

export default Item;
