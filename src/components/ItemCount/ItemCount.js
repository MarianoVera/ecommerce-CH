import React, { Fragment, useState } from "react";
import { Button, Label } from "semantic-ui-react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cant, setCant] = useState(initial);

  const handleIncrement = () => {
    if (cant < stock) setCant(cant + 1);
  };

  const handleDecrement = () => {
    if (cant > 1) setCant(cant - 1);
  };

  return (
    <Fragment>
      <Label>
        Stock disponible=
        <Label.Detail>{stock}</Label.Detail>
      </Label>

      <Button.Group>
        <Button onClick={handleDecrement}>-</Button>
        <Button.Or text={cant} />
        <Button primary onClick={handleIncrement}>
          +
        </Button>
      </Button.Group>

      <Button
        onClick={() => {
          onAdd(cant, stock);
        }}
        inverted
        color="green"
      >
        <Button.Content> Agregar </Button.Content>
      </Button>
    </Fragment>
  );
};

export default ItemCount;
