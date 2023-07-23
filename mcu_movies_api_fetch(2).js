function renderData(){
    let b=localStorage.getItem("api_fetch.products");
    b=JSON.parse(b);

    let arr = b.images;
    for(let i=0;i<arr.length;i++){
      console.log(arr[i])
      if(i==0)
        document.getElementById("d1").innerHTML +=
        `<div class="carousel-item active" style="width: 18rem; margin-top: 10px">
        <img src="${arr[i]}" class="image" style="height: 300px; margin-left: 140%;">
        </div>`
      else
        document.getElementById("d1").innerHTML +=
        `<div class="carousel-item" style="width: 18rem;">
        <img src="${arr[i]}" class="image" style="height: 300px; margin-left: 140%;">
        </div>`
    }

    // document.getElementById("d1").innerHTML+=
    // `<div class="col"><div class="card" style="width: 18rem; background-color: aquamarine; margin-top: 10px">
    // <img src='${arr[i]}' class="image" style="height: 300px;">
    // </div>
    // </div>`
    
    document.getElementById("d2").innerHTML+=
    `<div class="card-body" style="width: 18rem; margin-top: 10px">
      <h5 class="card-title">Title: ${b.title}</h5>
      <h5 class="card-brand">Brand: ${b.brand}</h5>
      <h5 class="card-category">Category: ${b.category}</h5>
      <h5 class="card-price">Price: ${b.price}</h5>
      <h5 class="card-discount">Discount: ${b.discountPercentage}</h5>
      <h5 class="card-stock">Stock: ${b.stock}</h5>
      <h5 class="card-rating">Rating: ${b.rating}</h5>
    </div>`
}

function cart_function(){
  alert("Your Item Has Been Added To Cart");
}

function buy_function(){
  location.replace("http://127.0.0.1:5500/mcu_movies_api_fetch(3).html")
}