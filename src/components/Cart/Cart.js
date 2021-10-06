import React from "react";
import { useCardContext } from "../CartContext/CartContext";
import { Card, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./CartStyle.css";
import EndBuy from "../endBuy/EndBuy";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useCardContext();

  return (
    <div className="CartStyle">
      <h1>Carrito de compras</h1>
      {cart.map((prod) => (
        <div className="card">
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="tiny" src={prod.image} />
                <Card.Header>{prod.title}</Card.Header>
                <Card.Meta>${prod.price}</Card.Meta>
                <Card.Description>Cantidad: {prod.quantity}</Card.Description>
                <Card.Description>
                  Total parcial producto: ${prod.quantity * prod.price}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="red" onClick={() => removeItem(prod.id)}>
                    Eliminar
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      ))}

      {cart.length === 0 ? (
        <Link to="/">
          {" "}
          <Button content="Volver a Home" color="blue" />
        </Link>
      ) : (
        <h2> Total monto: ${totalPrice}</h2>
      )}

      <EndBuy />
    </div>
  );
};

export default Cart;
