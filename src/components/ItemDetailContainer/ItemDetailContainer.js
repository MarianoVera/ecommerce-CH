import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { itemId } = useParams();

  const initial = 1;
  const Agregar = (cant, stock) => {
    if (stock > 0) {
      return console.log(cant);
    } else {
      return false;
    }
  };

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
          <ItemCount stock="10" initial={initial} onAdd={Agregar} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
