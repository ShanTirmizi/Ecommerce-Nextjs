import React from 'react';
import data from '../utils/data';
import Image from './Image';

const Home = () => {
  console.log(data.products);
  return (
    <>
      {data.products.map((product, index) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Image src={product.image} alt={product.name} />
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Home;
