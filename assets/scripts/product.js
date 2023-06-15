const Products = [
    {
      id: 1,
      Image: "https://i.postimg.cc/5y2DJ3Yp/1672969769fce342960111936d61a3207f08b51848-thumbnail-600x.webp",
      Price: 499.00,
      name: "hoody",
      desc:"Women Blue Hoody",
      
      
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/FzGprX5J/1667886765770b30b4ab32fcd16670bc198b0a6f2a-thumbnail-600x.webp",
      Price: 399.00,
      name: "hoody",
      desc:"Every day hoodie, with kangaroo pockets.",

    },
    {
      id: 3,
      Image: "https://i.postimg.cc/ZqVxdHTB/images-6.jpg",
      Price: 299.00,
      name: "hoody",
      desc:"Boys soft hoody",
      
    },
    {
      id: 4,
      Image: "https://i.postimg.cc/K8hfS4qz/images-5.jpg      ",
      Price: 250.00,
      name: "hoody",
      desc:"A soft fabric blend and stay-put ribbed hem and cuffs provide reliable comfort.",
      
    },
    {
      id: 5,
      Image: "https://i.postimg.cc/vZ7zQMkv/images-4.jpg",
      Price: 150.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 6,
      Image: "https://i.postimg.cc/BZyNpm22/images-3.jpg      ",
      Price: 249.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 7,
      Image: "https://i.postimg.cc/65kjWM3B/download-9.jpg",
      Price: 349.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 8,
      Image: "https://i.postimg.cc/JzjTGjDZ/download-7.jpg",
      Price: 150.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 9,
      Image: "https://i.postimg.cc/J4DYCfRT/download-6.jpg",
      Price: 299.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 10,
      Image: "https://i.postimg.cc/2yJHBw7F/download-5.jpg",
      Price: 199.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 11,
      Image: "https://i.postimg.cc/J0t6ngZz/download-4.jpg",
      Price: 499.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 12,
      Image: "https://i.postimg.cc/fW6pyzq4/Ladies-Bravo-Hooded-Sweater-Black.jpg      ",
      Price: 449.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 13,
      Image: "https://i.postimg.cc/3w7tpWm6/download-10.jpg      ",
      Price: 349.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 14,
      Image: "https://i.postimg.cc/yYktYJyy/61-Vlhy-INk6-L.jpg",
      Price: 699.00,
      name: "hoody",
      desc:"smile",
    },
    {
      id: 15,
      Image: "https://i.postimg.cc/hv3Y1gcm/51-M4-BW6m-JL.jpg",
      Price: 599.00,
      name: "hoody",
      desc:"smile",
    },
  ];
  
 
  
  function displayProducts() {
    let dispProduct = document.getElementById("products");
    Products.forEach((data) => {
      dispProduct.innerHTML += `
        <div class="col-12 col-md-4 col-sm-6">
          <div class="product card m-4 p-3" style="width: 400px">
            <img src="${data.Image}">  
            <div class="card-body">
            <p class="text-black">${data.desc}</p>
              <p class="text-black">R${data.Price}</p>
              <button class="btn btn-primary" onclick="addToCart(${data.id})">Add to Cart</button>
            </div>
          </div>
        </div>`;
    });
  }
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function addToCart(productId) {
    const product = Products.find((product) => product.id === productId);
  

    if (product) {
      cart.push({
        name: product.name,
        Price: product.Price

      });
      updateCart();
      setCartItems();
    }
  }
  
  function updateCart() {
    const cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = "";
  
    cart.forEach((product, index) => {
      const cartItem = document.createElement("tr");
      cartItem.innerHTML = `
        <td>${product.name}</td>
        <td>R${product.Price}</td>
        <td><button class="btn btn-primary" onclick="removeFromCart(${index})">Del🚮</button></td>
      `;
      cartTable.appendChild(cartItem);
    });
  } 

  function setCartItems() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    setCartItems();
  }

  // Sort products by a given property
function sortProducts(property) {
  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
  displayProducts(sortedProducts);
}
// Add event listener to the sort by price button
document.getElementById("sort-by-price").addEventListener("click", () => {
  sortProducts("price");
});

// Add event listener to the sort by name button
document.getElementById("sort-by-name").addEventListener("click", () => {
  sortProducts("name");
});

  
  displayProducts();
  updateCart();
  
  function showTask() {
    const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    modal.show();
  }
  
  