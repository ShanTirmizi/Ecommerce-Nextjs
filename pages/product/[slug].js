import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((p) => p.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.stock}</p>
      {product.stock > 0 ? (
        <button>Add to Cart</button>
      ) : (
        <div>not in stock</div>
      )}
    </>
  );
};

export default ProductScreen;
