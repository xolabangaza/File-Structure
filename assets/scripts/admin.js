// Get the product form element
const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the form input values
  const nameInput = document.getElementById('name');
  const imageInput = document.getElementById('image');
  const priceInput = document.getElementById('price');

  // Create a new product object
  const newProduct = {
    name: nameInput.value,
    image: imageInput.value,
    price: parseFloat(priceInput.value),
  };

  // Clear the form inputs
  nameInput.value = '';
  imageInput.value = '';
  priceInput.value = '';

  // Perform your logic to add the new product
  // For example, you can push the new product to the existing Products array
  Products.push(newProduct);

  // Display success message or perform any other necessary actions
  alert('Product added successfully!');
});


// Retrieve products from local storage
let Products = JSON.parse(localStorage.getItem("products")) || [];

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

  products.push(newProduct);
  saveProductsToLocalStorage();
  resetForm();
  alert("Product added successfully!");
}

// Retrieve products from local storage
let products = JSON.parse(localStorage.getItem("products")) || [];

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

  products.push(newProduct);
  saveProductsToLocalStorage();
  resetForm();
  displayProducts();
  alert("Product added successfully!");
}

// Save products to local storage
function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Reset the form fields
function resetForm() {
  document.getElementById("add-product-form").reset();
}

// Display products in the table
function displayProducts() {
  const tableBody = document.getElementById("product-table").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td><img src="${product.image}" width="50" height="50"></td>
      <td>${product.price}</td>
    `;

    tableBody.appendChild(row);
  }
}

// Add event listener to the form submit event
document.getElementById("add-product-form").addEventListener("submit", addProduct);

// Display products on page load
displayProducts();


