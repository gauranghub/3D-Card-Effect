const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const desc = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");
//Moving Animation Event
container.addEventListener("mousemove",(e)=>{
    console.log("hey");
    console.log(e.pageX , e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg)`;
}); 

//Animate IN
container.addEventListener('mouseenter' , (e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transition = "none";
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    desc.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})

//Animate OUT
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    desc.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})