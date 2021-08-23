import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/9")
      .then((response) => response.json())
      .then((res) => setProductos(res));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {Loading ? (
        <div className="Spinner">
          <Icon size="big" color="blue" loading name="redo alternate" />
        </div>
      ) : (
        <ItemDetail data={productos} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
