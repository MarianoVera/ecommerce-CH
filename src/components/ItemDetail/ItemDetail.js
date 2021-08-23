import React from "react";
import "./ItemDetail.css";
import { Item } from "semantic-ui-react";

const ItemDetail = ({ data }) => {
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
            </Item.Content>
          </div>
        </Item>
      </Item.Group>
    </div>
  );
};

export default ItemDetail;
