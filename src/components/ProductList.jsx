// import React from 'react';
// import ProductCard from './ProductCard';

// const ProductList = ({ products }) => {
//   // TODO: Check if the product list is empty and display a message if needed

//   return (
//     <div>
//       {/* TODO: Iterate over the products array and render a ProductCard for each product */}
//     </div>
//   );
// };

// export default ProductList;


import React from 'react';
import ProductCard from './ProductCard';

// const ProductList = ({ products }) => {
  const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
        // <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;