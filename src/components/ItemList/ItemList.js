import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  //const [header, setHeader] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=7`)
      .then((response) => response.json())
      .then((res) => {
        categoryId
          ? setProductos(res.filter((e) => e.category === categoryId))
          : setProductos(res);
      });

    // if (categoryId === "jewelery") {
    //   setHeader("Jewelery");
    // } else if (categoryId === "men's clothing") {
    //   setHeader("Men's Clothing");
    // } else {
    //   setHeader("Catálogo");
    // }
  }, [categoryId]);

  return (
    <div>
      {/* <Header className="header" as="h1">
        {header}
      </Header> */}
      {categoryId === "jewelery" ? <h1>Jewelery</h1> : <h1>a</h1>}

      {categoryId === "jewelery" ? (
        <Header className="header" as="h1">
          Jewelery
        </Header>
      ) : categoryId === "men's clothing" ? (
        <Header className="header" as="h1">
          Men's Clothing
        </Header>
      ) : (
        <Header className="header" as="h1">
          Catálogo
        </Header>
      )}

      {productos.map((prod) => {
        return <Item key={prod.id} data={prod} />;
      })}
    </div>
  );
};

export default ItemList;
