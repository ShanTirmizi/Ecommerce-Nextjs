import React from 'react';
import data from '../utils/data';
import Link from 'next/link';

const Home = () => {
  console.log(data.products);
  return (
    <>
      {data.products.map((product, index) => {
        return (
          <div key={product.id}>
            <Link href={`/product/${product.slug}`} passHref>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} />
                <p>{product.price}</p>
                <p>{product.stock}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Home;
