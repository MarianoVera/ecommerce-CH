import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { itemId } = useParams();

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs.filter((e) => e.id === itemId));
    });
  };

  useEffect(() => {
    getProducts();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div>
      {Loading ? (
        <div className="Spinner">
          <Icon size="big" color="blue" loading name="redo alternate" />
        </div>
      ) : (
        <div>
          <ItemDetail data={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
