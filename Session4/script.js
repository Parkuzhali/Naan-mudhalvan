let mobile = [
  {
    productId: 1,
    brand: "samsung",
    model: "Galaxy123",
    image:
      "https://m.media-amazon.com/images/I/41wN6INDeHL._SX300_SY300_QL70_FMwebp_.jpg",
    description: "OnePlus Nord 4 5G (Mercurial Silver, 8GB RAM, 256GB Storage",
    price: " ₹28,998",
  },
  {
    productId: 2,
    brand: "Apple",
    model: "Galaxy123",
    image: "https://m.media-amazon.com/images/I/31vz6yNQ6+L._SX342_SY445_.jpg",
    description: "Apple iPhone 15 (128 GB) - Pink",
    price: " ₹61,900",
  },
  {
    productId: 3,
    brand: "Apple",
    image: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._SL1500_.jpg",
    description: "Apple iPhone 13 (128 GB) - Pink",
    price: " ₹58,000",
  },
  {
    productId: 4,
    brand: "Apple",
    model: "Galaxy123",
    image: "https://m.media-amazon.com/images/I/619oqSJVY5L._SX466_.jpg",
    description:
      "iPhone 16 Pro Max 1 TB: 5G Mobile Phone with Camera Control,Black Titanium",
    price: " ₹172,900",
  },
  {
    productId: 5,
    brand: "Redmi",
    model: "Galaxy123",
    image:
      "https://m.media-amazon.com/images/I/4108Ig7HKtL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Redmi 13 5G, Hawaiian Blue, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
    price: " ₹11,999",
  },
];

var con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `<div>
    <img src=${mobile[i].image}>  <h1>${mobile[i].brand}</h1> 
<p>${mobile[i].description}</p>
<h4>${mobile[i].price}</h4>
 <button onclick="cart(${mobile[i].productId})">Add to cart</button>
    </div>`;
}
let arr = [];
function cart(product) {
  arr.push(mobile[product - 1]);
  localStorage.setItem("cartItem", JSON.stringify(arr));
}
