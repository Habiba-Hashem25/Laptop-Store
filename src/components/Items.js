// import React from "react";
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const StoreItem = ({ id, name, price, imgUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
        <Button className="" style={{display:"block" , margin:"10PX auto"}} onClick={toggleFavorite}>
      <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} />
    </Button>
         </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
