const text = document.getElementById('text');
const Btn = document.getElementById('btn');

const MyFun = ()=>{
const sethead = {
    headers :{
        Accept:"application/json"
    }
}
fetch("https://icanhazdadjoke.com", sethead).then((req) =>
req.json()
).then((data) =>{
 text.innerHTML = data.joke;
 text.style.fontSize ="1.3rem";
}).catch((error) =>{
    console.log(error);
})
}
Btn.addEventListener('click', MyFun);