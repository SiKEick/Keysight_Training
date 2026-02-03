
import React from 'react';

function ShoppingComp() {
  return (
    <div>
      <h2>Shopping Component</h2>
      <Product
        name="Magna 10x Watch"
        price={3500}
        brand="Titan"
        mname="LG 1034 Microwave"
        mprice={4500}
      />
    </div>
  );
}

function Product({ name, price, brand, mname, mprice }) {
  return (
    <div>
      <h2>List of Products</h2>
      <Watch name={name} price={price} brand={brand} />
      <Microwave name={mname} price={mprice} />
    </div>
  );
}

function Watch({ name, price, brand }) {
  return (
    <div>
      <h3>Watch Details below</h3>
      <p>Product name is {name}</p>
      <p>Product price is {price}</p>
      <p>Product brand is {brand}</p>
    </div>
  );
}

function Microwave({ name, price }) {
  return (
    <div>
      <h3>Microwave Details below</h3>
      <p>Product name is {name}</p>
      <p>Product price is {price}</p>
    </div>
  );
}

export default ShoppingComp;
