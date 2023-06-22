let adminProd = JSON.parse(localStorage.getItem("products")) || [];

const Products = [
    {
      id: 1,
      Image: "https://i.postimg.cc/5y2DJ3Yp/1672969769fce342960111936d61a3207f08b51848-thumbnail-600x.webp",
      Price: 499.00,
      name: "hoody",
      desc:"Women Blue Hoody",
      type:"W",
      
      
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/FzGprX5J/1667886765770b30b4ab32fcd16670bc198b0a6f2a-thumbnail-600x.webp",
      Price: 399.00,
      name: "hoody",
      desc:"Every day hoodie, with kangaroo pockets.",
      type:"W",

    },
    {
      id: 3,
      Image: "https://i.postimg.cc/ZqVxdHTB/images-6.jpg",
      Price: 299.00,
      name: "hoody",
      desc:"Boys soft hoody",
      type:"B",
      
    },
    {
      id: 4,
      Image: "https://i.postimg.cc/K8hfS4qz/images-5.jpg      ",
      Price: 250.00,
      name: "hoody",
      desc:"A soft fabric blend and stay-put ribbed hem and cuffs provide reliable comfort.",
      type:"G",
      
    },
    {
      id: 5,
      Image: "https://i.postimg.cc/vZ7zQMkv/images-4.jpg",
      Price: 150.00,
      name: "hoody",
      desc:"soft",
      type:"M",
    },
    {
      id: 6,
      Image: "https://i.postimg.cc/BZyNpm22/images-3.jpg      ",
      Price: 249.00,
      name: "hoody",
      desc:"comfy",
      type:"B",
    },
    {
      id: 7,
      Image: "https://i.postimg.cc/65kjWM3B/download-9.jpg",
      Price: 349.00,
      name: "hoody",
      desc:"soft",
      type:"M",
    },
    {
      id: 8,
      Image: "https://i.postimg.cc/JzjTGjDZ/download-7.jpg",
      Price: 150.00,
      name: "hoody",
      desc:"comfy",
      type:"M",
    },
    {
      id: 9,
      Image: "https://i.postimg.cc/J4DYCfRT/download-6.jpg",
      Price: 299.00,
      name: "hoody",
      desc:"soft touch",
      type:"M",
    },
    {
      id: 10,
      Image: "https://i.postimg.cc/2yJHBw7F/download-5.jpg",
      Price: 199.00,
      name: "hoody",
      desc:"it way comfy",
      type:"G",
    },
    {
      id: 11,
      Image: "https://i.postimg.cc/J0t6ngZz/download-4.jpg",
      Price: 499.00,
      name: "hoody",
      desc:"comfy",
      type:"B",
    },
    {
      id: 12,
      Image: "https://i.postimg.cc/fW6pyzq4/Ladies-Bravo-Hooded-Sweater-Black.jpg      ",
      Price: 449.00,
      name: "hoody",
      desc:"nice and soft",
      type:"W",
    },
    {
      id: 13,
      Image: "https://i.postimg.cc/3w7tpWm6/download-10.jpg      ",
      Price: 349.00,
      name: "hoody",
      desc:"soft",
      type:"B",
    },
    {
      id: 14,
      Image: "https://i.postimg.cc/yYktYJyy/61-Vlhy-INk6-L.jpg",
      Price: 699.00,
      name: "hoody",
      desc:"soft touch",
      type:"G",
    },
    {
      id: 15,
      Image: "https://i.postimg.cc/hv3Y1gcm/51-M4-BW6m-JL.jpg",
      Price: 599.00,
      name: "hoody",
      desc:"comfy hoody",
      type:"G",
    },
  ];

  for(let i = 0; i < adminProd.length; i++) {
    Products.push(adminProd[i])
  }
  
  
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
  function calculateTotalPrice() {
    let totalPrice = 0;
  
    cart.forEach((product) => {
      totalPrice += product.Price;
    });
  
    return totalPrice;
  }


  
  function updateCart() {
    const cartTable = document.getElementById("cart-table");
    const cartTotal = document.getElementById("cart-total");
    cartTable.innerHTML = "";

    let totalPrice = 0;
  
    cart.forEach((product, index) => {
      const cartItem = document.createElement("tr");
      cartItem.innerHTML = `
        <td>${product.name}</td>
        <td>R${product.Price}</td>
        <td><button class="btn btn-primary" onclick="removeFromCart(${index})">Del🚮</button></td>
      `;
      cartTable.appendChild(cartItem);
      totalPrice += product.Price; 
    });

    cartTotal.innerText = `Total: R${totalPrice.toFixed(2)}`; 
  } 

  function setCartItems() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    setCartItems();
  }

  // Sort products by price
function sortPrice() {
  adminProd.sort((a, b) => a.price - b.price);
  
}
  

  displayProducts(Products);
  function filterProducts() {
  const selectCategory = document.getElementById("category");
  const selectedCategory = selectCategory.value;
  let selected=[]

  Products.forEach((data)=>{
    console.log(data.type == selectedCategory.split(' '));
    if (data.type == selectedCategory.split(' ')) {
       selected.push(Products[Products.indexOf(data)])
    }
  })
  console.log(selected);
  displayProducts(selected);
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

function checkout() {
  if(cart.length > 0) {
      clearCart();
      alert("Thank you for your purchase")
  } else {
      alert("Your cart is empty, please add items before you checkout")
  }
}

  
  updateCart();
  
  function showTask() {
    const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    modal.show();
  }
  
  