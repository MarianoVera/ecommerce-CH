import { React, useState } from "react";
import "./ItemDetail.css";
import { Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCardContext } from "../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  //const [cantidad, setCantidad] = useState({});
  const [selected, setSelected] = useState(false);

  const { addToCart } = useCardContext();

  const initial = 1;
  const Agregar = (cant, stock) => {
    if (stock > 0) {
      addToCart(data, cant);
      //setCantidad(cant);
      setSelected(true);
    } else {
      return false;
    }
  };

  return (
    <div className="ItemDetail">
      <Item.Group>
        <Item>
          <Item.Image size="medium" src={data.image} />
          <div className="ItemContent">
            <Item.Content>
              <Item.Header className="Header">{data.title}</Item.Header>
              <Item className="Precio">${data.price}</Item>
              <Item.Description>{data.description}</Item.Description>

              {selected ? (
                <Link to="/cart">
                  {" "}
                  <Button content="Finalizar compra" color="olive" />
                </Link>
              ) : (
                <ItemCount stock="10" initial={initial} onAdd={Agregar} />
              )}
            </Item.Content>
          </div>
        </Item>
      </Item.Group>
    </div>
  );
};

export default ItemDetail;
