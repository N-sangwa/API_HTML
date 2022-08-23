// const { type } = require("os");

// fetch('http://localhost:5000/products/fruits')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const productDiv = document.getElementById('products') 

const dataDisplay = (id, data) => {
  const productDiv = document.getElementById(`${id}`)
  productDiv.innerHTML = data.map((item) => `<li> ${item.name.replace(/,/g,'')} </li>`) 
  
} 

const getData = (category) => {
  const results = fetch (`http://localhost:5000/${category}`)
  .then((response) => response.json())
  .then((data) => dataDisplay(category, data))
  .catch((error) => console.log(error))
return results
}

getData('products')




