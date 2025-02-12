import React from 'react';

// Mendefinisikan interface untuk tipe data produk
interface ProductProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Komponen fungsional yang menerima props sesuai dengan interface ProductProps
const Product: React.FC<ProductProps> = (props) => {
  return (
    <div style={{ border: "1px solid black", margin: "20px", borderRadius: "8px", padding: "20px" }}>
      <img src={props.imageUrl} alt={props.name} width={100} height={100} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default Product; // Mengekspor komponen Product untuk digunakan di tempat lain