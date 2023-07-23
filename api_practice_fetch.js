var api_Response;
function my_function(){
    let a = fetch("https://randomuser.me/api/")
    .then((response)=>{
        console.log(response.status)
        return response.json()
    }).then((value)=>{
        api_Response=value
            document.getElementById("Fisrt_api").innerHTML+=`<div class="img"><img class="imge" src="${value.results[0].picture.large}"></div>`

    })
}

function fun(x){
    if(x=="icon-1"){
        document.getElementById("Second_api").innerHTML=
        `<div><h3> ${api_Response.results[0].name.first} ${api_Response.results[0].name.last}</h3></div>`
    }
    else if(x=="icon-2"){
        document.getElementById("Second_api").innerHTML=
        `<div><h3> ${api_Response.results[0].email}</h3></div>`
    }
    else if(x=="icon-3"){
        document.getElementById("Second_api").innerHTML=
        `<div><h3> ${api_Response.results[0].dob.date}</h3></div>`
    }
    else{
        document.getElementById("Second_api").innerHTML=
        `<div><h3> ${api_Response.results[0].location.country}</h3></div>`
    }
}