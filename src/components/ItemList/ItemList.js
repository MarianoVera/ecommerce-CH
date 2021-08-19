import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => response.json())
        .then((res) => setProductos(res));
    }, 2000);
  }, []);

  return (
    <div className="ItemList">
      <h1>Item List</h1>
      {productos.map((prod) => {
        return <Item key={prod.id} data={prod} />;
      })}
    </div>
  );
};

export default ItemList;
