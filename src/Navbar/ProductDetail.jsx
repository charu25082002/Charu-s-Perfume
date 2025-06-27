import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // For now, mock product data (you can replace this with actual API call)
  const mockProduct = {
    id,
    name: `Product ${id}`,
    description: `This is a description for product ${id}.`,
    price: `$${parseInt(id) * 10}`,
    image: `https://via.placeholder.com/300x200?text=Product+${id}`,
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{mockProduct.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={mockProduct.image}
          alt={mockProduct.name}
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">{mockProduct.description}</p>
          <p className="text-xl font-semibold mb-4">
            Price: {mockProduct.price}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
