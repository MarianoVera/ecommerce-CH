import { React, useState } from "react";
import "./ItemDetail.css";
import { Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCardContext } from "../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  const [selected, setSelected] = useState(false);

  const { addToCart } = useCardContext();

  const initial = 1;
  const Agregar = (cant, stock) => {
    if (stock > 0) {
      addToCart(data[0], cant);
      setSelected(true);
    } else {
      return false;
    }
  };

  return (
    <div className="ItemDetail">
      <Item.Group>
        <Item>
          <Item.Image size="medium" src={data[0].image} />
          <div className="ItemContent">
            <Item.Content>
              <Item.Header className="Header">{data[0].title}</Item.Header>
              <Item className="Precio">${data[0].price}</Item>
              <Item.Description>{data[0].description}</Item.Description>

              {selected ? (
                <Link to="/cart">
                  {" "}
                  <Button content="Finalizar compra" color="olive" />
                </Link>
              ) : (
                <ItemCount
                  stock={data[0].stock}
                  initial={initial}
                  onAdd={Agregar}
                />
              )}
            </Item.Content>
          </div>
        </Item>
      </Item.Group>
    </div>
  );
};

export default ItemDetail;
