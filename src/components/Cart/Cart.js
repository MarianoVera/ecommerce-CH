import React from "react";
import { useCardContext } from "../CartContext/CartContext";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./CartStyle.css";
import EndBuy from "../endBuy/EndBuy";
//import { useState } from "react/cjs/react.development";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useCardContext();
  // const [empty, setEmpty] = useState(false);

  // if (cart.lenght === 0) {
  //   setEmpty(true);
  // }
  //const montoTotal = cart.map((prod) => prod.price * prod.quantity);

  return (
    <div className="CartStyle">
      <h1>Carrito de compras</h1>
      {cart.map((prod) => (
        // <Card>
        //   <Image src={prod.image} />
        //   <Card.Content>
        //     <Card.Header>{prod.title}</Card.Header>
        //     <Card.Meta>
        //       <span className="date">${prod.price}</span>
        //     </Card.Meta>
        //     <Card.Header>{prod.quantity}</Card.Header>
        //   </Card.Content>
        // </Card>
        <Card.Group>
          <Card fluid color="olive" header={prod.title} />
          <Button basic color="red" onClick={() => removeItem(prod.id)}>
            Eliminar
          </Button>
        </Card.Group>
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
