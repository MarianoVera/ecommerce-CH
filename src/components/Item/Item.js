import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="Item">
      <Card>
        <Image src={data.image} />
        <Card.Content>
          <Card.Header>{data.title}</Card.Header>
          <Card.Meta>
            <span className="date">${data.price}</span>
          </Card.Meta>
          <Card.Description>{data.description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
