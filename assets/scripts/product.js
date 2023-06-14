const Products = [
    {
      id: 1,
      Image: "https://i.postimg.cc/5y2DJ3Yp/1672969769fce342960111936d61a3207f08b51848-thumbnail-600x.webp",
      Price: 7777,
      name: "hoody",
      
      
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/FzGprX5J/1667886765770b30b4ab32fcd16670bc198b0a6f2a-thumbnail-600x.webp",
      Price: 77,
      name: "hoody",

    },
    {
      id: 3,
      Image: "https://i.postimg.cc/ZqVxdHTB/images-6.jpg",
      Price: 55,
      name: "hoody",
      
    },
    {
      id: 4,
      Image: "https://i.postimg.cc/K8hfS4qz/images-5.jpg      ",
      Price: 55,
      name: "hoody",
      
    },
    {
      id: 5,
      Image: "https://i.postimg.cc/vZ7zQMkv/images-4.jpg",
      Price: 77,
      name: "hoody",
    },
    {
      id: 6,
      Image: "https://i.postimg.cc/BZyNpm22/images-3.jpg      ",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 7,
      Image: "https://i.postimg.cc/65kjWM3B/download-9.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 8,
      Image: "https://i.postimg.cc/JzjTGjDZ/download-7.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 9,
      Image: "https://i.postimg.cc/J4DYCfRT/download-6.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 10,
      Image: "https://i.postimg.cc/2yJHBw7F/download-5.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 11,
      Image: "https://i.postimg.cc/J0t6ngZz/download-4.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 12,
      Image: "https://i.postimg.cc/fW6pyzq4/Ladies-Bravo-Hooded-Sweater-Black.jpg      ",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 13,
      Image: "https://i.postimg.cc/3w7tpWm6/download-10.jpg      ",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 14,
      Image: "https://i.postimg.cc/yYktYJyy/61-Vlhy-INk6-L.jpg",
      Price: 6666,
      name: "hoody",
    },
    {
      id: 15,
      Image: "https://i.postimg.cc/hv3Y1gcm/51-M4-BW6m-JL.jpg",
      Price: 6666,
      name: "hoody",
    },
  ];
  
 
  
  function displayProducts() {
    let dispProduct = document.querySelector(".products");
    Products.forEach((data) => {
      dispProduct.innerHTML += `
        <div class="col-12 col-md-4 col-sm-6">
          <div class="product card m-4 p-3" style="width: 400px">
            <img src="${data.Image}">  
            <div class="card-body">
              <p class="text-black">${data.Price}</p>
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
      cart.push(product);
      updateCart();
      setCartItems();
  }
  }
  
  function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
  
    cart.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <td>${product.name}</td>
        <td>R${product.Price}</td>
      `;
      cartContainer.querySelector("table").appendChild(cartItem);
    });
  }
  
  
  
  function setCartItems() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  displayProducts();
  updateCart();
  
  function showTask() {
    const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    modal.show();
  }
  
  