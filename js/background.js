const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
];
const chosenImage = `img/${images[Math.floor(Math.random() * images.length)]}`;

//img tag생성
const backgroundImage = document.createElement("img"); 
//body select
const setting = document.querySelector("body");

//img tag에 요소 붙이기
backgroundImage.src = `${chosenImage}`;
//해당 img에 클래스 bgImages추가
backgroundImage.classList.add("bgImages");
//body에 추가한 img tag 붙이기
setting.appendChild(backgroundImage);

// console.log(chosenImage);
// console.log(backgroundImage);
// console.log(backgroundImage.src);


