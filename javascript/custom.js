window.addEventListener("load",function(){
    let imgs = document.querySelectorAll(".imageSmall");
    let large = document.querySelector(".large");
    for(let i = 0; i<imgs.length; i++){
     imgs[i].onclick = function(e){
     large.src = e.target.src;
     }
 }
    })



window.addEventListener("load",function(){
    let imgs = document.querySelectorAll(".image");
    let large = document.querySelector(".large");
    for(let i = 0; i<imgs.length; i++){
     // $(`imgs:nth-child(${i}) img`).src =large.src
     imgs[i].onclick = function(){
            large.src =  `./image/custom/0${i}.jpg`;
     }

 }
    })