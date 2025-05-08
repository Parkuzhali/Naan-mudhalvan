import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      brand: "Samsung",
      model: "S24 Ultra Pro-Max",
      price: 100000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.9KJ_nqvybJ8Cw65Wl3GlOQHaEc&pid=Api&P=0&h=180",
      description: "High-end smartphone with amazing features.",
    },
    {
      id: 2,
      brand: "Apple",
      model: "iPhone 16 Pro-Max",
      price: 120000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.9KJ_nqvybJ8Cw65Wl3GlOQHaEc&pid=Api&P=0&h=180",
      description: "Flagship Apple device for pro users.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {products.map((pro, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={pro.image} alt={pro.model} />
          </figure>
          <div className="card-body bg-green-600 text-white">
            <h2 className="card-title">
              {pro.brand} - {pro.model}
            </h2>
            <p>{pro.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Buy Now - ₹{pro.price}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
