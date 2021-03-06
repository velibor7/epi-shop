import React, { useEffect } from "react";

import { CSSTransition } from "react-transition-group";

import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <>
      <CSSTransition
        in={props.show}
        timeout={1000}
        classNames="slide-in-right"
        mountOnEnter
        unmountOnExit
      >
        <aside className="item-detail">
          {props.item ? (
            <div className="item-detail__container">
              <img
                src={`http://localhost:5000/${props.item.image}`}
                alt={props.item.title}
                className="item-detail__img"
              />
              <p>{props.item.title}</p>
              <p>{props.item.description}</p>

              <p>${props.item.price}</p>
              <div className="item-detail__actions">
                <Link to={`/update/${props.item.id}`}>Update</Link>
                <button onClick={props.onDelete}>DELETE</button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </aside>
      </CSSTransition>
    </>
  );
};

export default ItemDetail;
