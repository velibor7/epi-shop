import React from "react";

import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import cartIcon from "../../shared/icons/cart.svg";

const Item = (props) => (
  <>
    <li className="item__li">
      <Card className="item__card">
        <img src="" alt={props.title} className="item__image" />
        <h2>{props.title}</h2>
        <p className="item__price">{props.price}</p>
        <Link
          to="?category=skydiving"
          className={`item__category item__category-${props.category}`}
        >
          {props.category}
        </Link>
        <div className="item__bottom">
          <img src={cartIcon} alt="Add to cart" className="item__cart-icon" />
        </div>
      </Card>
    </li>
  </>
);

export default Item;
