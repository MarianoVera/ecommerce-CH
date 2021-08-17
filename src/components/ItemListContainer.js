import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = ({ img1, img2, img3 }) => {
  const initial = 1;
  const Agregar = (cant, stock) => {
    if (stock > 0) {
      return console.log(cant);
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <Card
              image={img1}
              header="Procesador Intel i9 9900"
              meta="Intel"
              description="Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos."
            />
            <ItemCount stock="5" initial={initial} onAdd={Agregar} />
          </div>
          <div className="col">
            <Card
              image={img2}
              header="Keyboard Gamer"
              meta="Redragon"
              description="Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida desde hace más de 20 años."
            />
            <ItemCount stock="7" initial={initial} onAdd={Agregar} />
          </div>
          <div className="col">
            <Card
              image={img3}
              header="Notebook i5 4GB RAM"
              meta="Lenovo"
              description="La notebook Lenovo es una solución tanto para trabajar y estudiar como para entretenerte."
            />
            <ItemCount stock="0" initial={initial} onAdd={Agregar} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
