var form=document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    var name=document.getElementById('name').value
    var body=document.getElementById('body').value
    var id=document.getElementById('id').value


    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
            Body: JSON.stringify({
                title: name,
                body: body,
                id: id
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})
