let products = [
 {name:"Laptop", price:50000},
 {name:"Headphones", price:2000},
 {name:"Mobile", price:15000},
 {name:"Shoes", price:3000}
];

let cartCount = 0;
let total = 0;

let container = document.getElementById("products");

products.forEach((p,i)=>{
 container.innerHTML += `
  <div class="card">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="add(${i})">Add to Cart</button>
  </div>
 `;
});

function add(i){
 cartCount++;
 total += products[i].price;
 document.getElementById("count").innerText = cartCount;
 document.getElementById("items").innerText = cartCount;
 document.getElementById("total").innerText = total;
}

function checkout(){
 alert("Order placed successfully!");
 cartCount=0; total=0;
 document.getElementById("count").innerText=0;
 document.getElementById("items").innerText=0;
 document.getElementById("total").innerText=0;
}
