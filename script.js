function getPost(posts){
    posts.map((index)=>{
        var result = document.getElementById("posts")
        result.innerHTML += `- ${index.title}`
        var br = document.createElement("br");
        result.appendChild(br)
        console.log()
    }) 

}


function userPost(id){
    var user =fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    user.then((item)=>{
        return item.json()
    }).then((posts)=>{
        document.getElementById("posts").innerHTML = ""
        getPost(posts);      
    })   
}


async function getAllUser(){
    var data = await fetch("https://jsonplaceholder.typicode.com/users") 
    var result = await data.json()
    
    result.map((item)=>{
        allUserInfo(item.name,item.id)
    })
    console.log(data)
    console.log(result)
}
getAllUser()


function allUserInfo(name,id) {
   var myDiv = document.getElementById("myDiv")
   var elem = document.createElement("button")
   var text = document.createTextNode(name)
   elem.id=id
   elem.appendChild(text)
   elem.classList.add("btn","btn-primary","button")
   elem.addEventListener("click",function () {
    userPost(id)
   } )
   myDiv.appendChild(elem)  
}
