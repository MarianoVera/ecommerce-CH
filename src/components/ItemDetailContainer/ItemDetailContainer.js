import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((res) => setProductos(res));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [itemId]);

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
