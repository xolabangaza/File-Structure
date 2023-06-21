let adminProd = JSON.parse(localStorage.getItem("products")) || [];

// Add new product to the list
function addProduct(event) {
  event.preventDefault();

  const productName = document.getElementById("product-name").value;
  const productImage = document.getElementById("product-image").value;
  const productPrice = document.getElementById("product-price").value;

  const newProduct = {
    id: products.length + 1,
    name: productName,
    image: productImage,
    price: parseFloat(productPrice),
  };

  adminProd.push(newProduct);
  saveProductsToLocalStorage();
  resetForm();
  displayProducts();
  alert("Product added successfully!");
}


function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Reset the form fields
function resetForm() {
  document.getElementById("add-product-form").reset();
}

// Display products in the table
function displayProducts() {
  const tableBody = document.getElementById("product-table");//.getElementsByTagName("tbody")[0]
  tableBody.innerHTML = "";

  // for (let i = 0; i < products.length; i++) {
  //   const product = products[i];

  //   const row = document.createElement("tr");
  //   row.innerHTML = `
  //     <td>${product.id}</td>
  //     <td>${product.name}</td>
  //     <td><img src="${product.image}" width="100" height="100"></td>
  //     <td>R${product.price}</td>
  //     <td>
  //     <button class="btn btn-primary" onclick="delAd(${index})">Del🚮</button>
  //     </td>
  //   `;

  //   tableBody.appendChild(row);
  // }
  adminProd.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td><img src="${product.image}" width="150" height="150"></td>
      <td>R${product.price}</td>
      <td>
      <button class="btn btn" onclick="delAd(${product.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  })
}
displayProducts();

function delAd(){

}

// Add event listener to the form submit event
document.getElementById("add-product-form").addEventListener("submit", addProduct);


displayProducts();
