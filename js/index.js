// Your code goes here
document.querySelector("header").addEventListener("mouseover", function(){
    document.querySelector("header").style.backgroundColor = "blue";  
});

document.querySelector("header").addEventListener("mouseleave", function(){
    document.querySelector("header").style.backgroundColor = "white";  
});

let imgs = document.querySelectorAll("img");
imgs.forEach (item =>{
    item.addEventListener("mouseenter", event =>{
        event.target.style.visibility = "hidden";  
    });
})

imgs.forEach (item =>{
    item.addEventListener("mouseleave", event =>{
        event.target.style.visibility = "visible";  
    });
})


let link = document.querySelectorAll("a");
link.forEach(text =>{
    text.addEventListener("click",event =>{
        event.target.style.textDecoration = "underline";  
    });
});

let btn = document.querySelectorAll(".btn");
btn.forEach(item =>{
    item.addEventListener("click",event =>{
        event.target.style.backgroundColor = "orange";  
    });
});

let h4 = document.querySelectorAll('h4');
h4.forEach(item =>{
    item.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "red";
    });
});

let h2 = document.querySelectorAll('h2');
h2.forEach(item =>{
    item.addEventListener("mouseover", event =>{
        event.target.style.color = "Purple";
    });
});

document.querySelector("footer").addEventListener("mouseover", function(){
    document.querySelector("footer").style.backgroundColor = "blue";  
});

document.querySelector("footer").addEventListener("mouseleave", function(){
    document.querySelector("footer").style.backgroundColor = "white";  
});

//the stop propagation and prevent default part
let pd = document.querySelectorAll("a");
pd.forEach(item =>{
    item.addEventListener("click",event =>{
        event.preventDefault();  
    });
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
    body.style.backgroundColor="green";
})


const txtContent = document.querySelector(".content-destination");
txtContent.addEventListener('click', (event) => {
    txtContent.style.backgroundColor="purple";
    event.stopPropagation() 
});



