import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { IoIosStar } from "react-icons/io";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1110px] mx-auto px-4 py-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-[300px] h-auto object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {product.title}
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <p className="text-xl font-semibold text-greebbg-green-brand">
              ${product.price}
            </p>
            <p className="font-medium flex items-center gap-[10px]">
              <IoIosStar className="text-yellow-500 text-[20px]" /> {product.rating} ({product.reviewCount} reviews)
            </p>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>
          <button className="mt-6 py-3 cursor-pointer px-6 bg-green-brand text-white rounded-lg font-semibold hover:bg-green-700 duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
