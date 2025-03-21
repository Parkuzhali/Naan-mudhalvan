var mobile = JSON.parse(localStorage.getItem("cartItem"));
console.log(mobile)


var con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `<div>
    <img src=${mobile[i].image}>  <h1>${mobile[i].brand}</h1> 
<p>${mobile[i].description}</p>
<h4>${mobile[i].price}</h4>
 <button onclick="cart(${mobile[i].productId})">Add to cart</button>
    </div>`;
}