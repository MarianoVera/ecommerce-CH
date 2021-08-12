import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import img1 from "./intel.jpg";
import img2 from "./keybd.jpg";
import img3 from "./note1.jpg";

const ItemListContainer = () => {
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
          </div>
          <div className="col">
            <Card
              image={img2}
              header="Keyboard Gamer"
              meta="Redragon"
              description="Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida desde hace más de 20 años."
            />
          </div>
          <div className="col">
            <Card
              image={img3}
              header="Notebook i5 4GB RAM"
              meta="Lenovo"
              description="La notebook Lenovo es una solución tanto para trabajar y estudiar como para entretenerte."
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
