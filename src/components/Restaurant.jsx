import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);
  function orderPizzas() {
    setPizzas(pizzas + 1);
  }

  const [salads, setSalads] = useState(0);
  function orderSalads() {
    setSalads(salads + 1);
  }

  const [chocolate, setChocolate] = useState(0);
  function orderChocolate() {
    setChocolate(chocolate + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order
          footCountNumber={pizzas}
          orderNumber={orderPizzas}
          orderType="Pizzas"
        />
        <Order
          footCountNumber={salads}
          orderNumber={orderSalads}
          orderType="Salads"
        />
        <Order
          footCountNumber={chocolate}
          orderNumber={orderChocolate}
          orderType="Chocolate Cake"
        />
      </ul>
    </div>
  );
};

export default Restaurant;
