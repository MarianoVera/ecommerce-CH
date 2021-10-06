import { React, useState } from "react";
import { Form } from "semantic-ui-react";
import { db } from "../../firebase";
import firebase from "firebase/app";
import { useCardContext } from "../CartContext/CartContext";
import "./EndBuy.css";

const EndBuy = () => {
  const { cart, totalPrice } = useCardContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const finish = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: {
        Nombre: name,
        Correo: email,
        Telefono: phone,
      },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice,
    };
    await db.collection("compras").add(newOrder);
    db.collection("compras")
      .orderBy("date", "desc")
      .limit(1)
      .get()
      .then((querySnapshot) => {
        const getID = [];
        querySnapshot.forEach((doc) => {
          getID.push(doc.id);
        });

        alert(getID);
      });
  };

  return (
    <div className="form">
      <Form onSubmit={finish}>
        <Form.Group>
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Button content="Finalizar compra" color="green" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default EndBuy;
