import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import { db } from "../../firebase";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      categoryId
        ? setProductos(docs.filter((e) => e.categoryID === categoryId))
        : setProductos(docs);
    });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <div className="titulo">
        {categoryId === "jewelery" ? (
          <Header className="titulo" as="h1">
            Jewelery
          </Header>
        ) : categoryId === "mens" ? (
          <Header className="header" as="h1">
            Men's Clothing
          </Header>
        ) : (
          <Header className="header" as="h1">
            Catálogo
          </Header>
        )}
      </div>

      {productos.map((prod) => {
        return <Item key={prod.id} data={prod} />;
      })}
    </div>
  );
};

export default ItemList;
