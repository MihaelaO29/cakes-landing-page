let image = document.querySelector(".content");
let images = ['cake1.jpg', 'cake2.jpg', 'cake3.jpg', 'cake4.jpg'];

setInterval(function () {
   let random = Math.floor(Math.random() * images.length);
   image.style.backgroundImage = `url(./img/${images[random]})`;
}, 1500);