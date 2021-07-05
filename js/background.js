const img = document.getElementById('bgImg');
const images = ['0.jpg', '1.jpg', '2.jpg'];
const choosenImg = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image: url(img/${choosenImg}); background-repeat: no-repeat; background-size:100% 100%`;
// img.src = `img/${choosenImg}`;
