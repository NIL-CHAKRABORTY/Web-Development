var api_fetch;
function mcu_function(){
    let a = fetch("https://dummyjson.com/products")
    .then((res)=>{
        return res.json()
    }).then((val)=>{
        api_fetch=val
        var data=api_fetch.products
        console.log(data)
        for(let i=0; i<data.length; i++){
            document.getElementById("inner_box").innerHTML+=
            `<div class="col"><div class="card" style="width: 18rem; background-color: aquamarine;">
            <img src="${data[i].images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Product Name: "${data[i].title}"</h5>
                <p class="card-text">"${data[i].description}"</p>
                <a href="mcu_movies_api_fetch(2).html"><button class="btn bg-primary text-white" onclick="setting_data(${i})">View Details</button></a>
            </div>
            </div>
            </div>`
        }
        
    })
}

function setting_data(sets){
    console.log(api_fetch[sets])
    localStorage.setItem("api_fetch.products",JSON.stringify(api_fetch.products[sets]))
}
//this is a test