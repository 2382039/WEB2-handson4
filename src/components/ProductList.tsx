import React from 'react';
import Product from './Product'; // Mengimpor komponen Product

// Data produk
const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop for work and play.",
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&fit=crop&w=500&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkxfHxtaXh3b3JrJTIwcGhvbmV8ZW58MHx8fGVufDB8fHx8&ixlib=rb-4.8.3"
  },
  {
    id: 2,
    name: "Smartphone",
    description: "The latest smartphone with cutting-edge features.",
    price: 799,
    imageUrl: "https://images.unsplash.com/photo-1494366222122-387658"
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and versatile tablet for entertainment and productivity.",
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1527698266448-1218404988757?crop=entropy&fit=crop&w=500&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxiYWNrY3Jpc3xlbnwwfDF8fHx8&ixlib=rb-4.8.3"
  },
];

// Komponen ProductList
const ProductList: React.FC = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {/* Memetakan setiap produk untuk ditampilkan menggunakan komponen Product */}
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;