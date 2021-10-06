import React from "react";
import { Icon } from "semantic-ui-react";
import { useCardContext } from "./CartContext/CartContext";

const CartWidget = () => {
  const { totalItems } = useCardContext();

  return (
    <Icon name="shop" color="black" size="large">
      {totalItems}
    </Icon>
  );
};

export default CartWidget;
