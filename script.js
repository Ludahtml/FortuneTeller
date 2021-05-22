'use strict!'



document.querySelector('.btn').addEventListener('click', function(){
    let number = Math.trunc(Math.random()*8) + 1;
console.log(number);
    
let randomImage = "images/img"+number+".jpg";
document.querySelector(".img").setAttribute("src", randomImage);

})

document.querySelector('.reset').addEventListener('click', function(){
    document.querySelector(".img").setAttribute("src", "images/tarot.jpg");
})