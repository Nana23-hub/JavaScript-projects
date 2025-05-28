
// post, get, put, delete, patch
// const url = "https://randomuser.me/api/"
// fetch(url)
// .then(response =>{
//     if(!response.ok){
//         throw new Error("An error occured")
//     }
//     return(response.json());
    
// })
// .then(data => console.log(data.results[0].gender));
document.getElementById('fetch-user').addEventListener("click",fetchUser)

//1st step
const url = "https://randomuser.me/api/"
function fetchUser(){
fetch(url)
 .then(response =>{
    if(!response.ok){
        throw new Error("An error occured")
     }
    return response.json(); 
})
.then(data =>{
    const user = data.results[0]
    console.log(user);
    
    displayUser(user)
    
  const load = document.getElementById('loader')
    load.style.display = 'none'
  user.classList.add('loader')
    
  })
}


//2nd step
function displayUser(user){
    document.getElementById('user-image').src=user.picture.medium
    document.getElementById('user-name').innerText =`${user.name.first} ${user.name.last}`
    document.getElementById('user-email').innerText = user.email
    document.getElementById('user-gender').innerText = user.gender
    document.getElementById('user-age').innerText = user.dob.age
   

 
    
}
fetchUser()
