// import React, { useState } from 'react';
// import ProductList from './components/ProductList';

// const App = () => {
//   // TODO: Define initial product data

//   // TODO: Implement state to manage filtering

//   // TODO: Implement logic to filter products based on availability

//   return (
//     <div>
//       <h1>{/* TODO: Add 'Product Dashboard' title here */}</h1>
      
//       {/* TODO: Add buttons to allow filtering by availability */}

//       {/* TODO: Render the ProductList component and pass filtered products */}
      
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Initial product data
  // const products = [
  //   { id: 1, name: 'Laptop', price: 999, available: true },
  //   { id: 2, name: 'Headphones', price: 199, available: false },
  //   { id: 3, name: 'Keyboard', price: 79, available: true },
  //   { id: 4, name: 'Monitor', price: 299, available: false },
  // ];

  // // State to manage filtering: 'all' | 'available' | 'out-of-stock'
  // const [filter, setFilter] = useState('all');

  // // Filter products based on availability
  // const filteredProducts = products.filter((product) => {
  //   if (filter === 'available') return product.available;
  //   if (filter === 'out-of-stock') return !product.available;
  //   return true;
  // });


const [products, setProducts] = useState([
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 499, inStock: true },
]);

const handleRemove = (id) => {
  setProducts((prev) => prev.filter((product) => product.id !== id));
};

const [filter, setFilter] = useState('all');

const filteredProducts = products.filter((product) => {
  if (filter === 'available') return product.inStock;
  if (filter === 'out-of-stock') return !product.inStock;
  return true;
});

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('available')}>Available</button>
        <button onClick={() => setFilter('out-of-stock')}>Out of Stock</button>
      </div>

      {/* <ProductList products={filteredProducts} /> */}
    <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;