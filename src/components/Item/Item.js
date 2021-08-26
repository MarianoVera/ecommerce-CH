import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="Item">
      <Link to={`/item/${data.id}`}>
        <Card>
          <Image className="image" src={data.image} />
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
              <span className="date">${data.price}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
