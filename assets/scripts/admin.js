let adminProd = JSON.parse(localStorage.getItem("products")) || [];

// Add new product to the list
function addProduct(event) {
  event.preventDefault();

  

  const productName = document.getElementById("product-name").value;
  const productImage = document.getElementById("product-image").value;
  const productPrice = document.getElementById("product-price").value;

  const newProduct = {
    id: adminProd.length + 1,
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
  localStorage.setItem("products", JSON.stringify(adminProd));
}

// Reset the form fields
function resetForm() {
  document.getElementById("add-product-form").reset();
}

// Display products in the table
function displayProducts() {
  const tableBody = document.getElementById("product-table");//.getElementsByTagName("tbody")[0]
  tableBody.innerHTML = "";


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

function delAd(productId) {
  adminProd = adminProd.filter(product => product.id !== productId);
  saveProductsToLocalStorage();
  displayProducts();
  alert("Product deleted successfully!");
}


// Add event listener to the form submit event
document.getElementById("add-product-form").addEventListener("submit", addProduct);


displayProducts();
