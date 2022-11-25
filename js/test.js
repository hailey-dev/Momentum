const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
];
const chosenImage = `img/${images[Math.floor(Math.random() * images.length)]}`;

//1st workspace.
function paintBackgroundImg(imgNumber){
    const backgroundImages = document.createElement("img");
    const backgroundImagesSetting = document.querySelector("body");
    backgroundImages.src = `${chosenImage}`;
    backgroundImages.classList.add("bgImages");
    backgroundImagesSetting.appendChild(backgroundImages);
}

//2nd workspace
// function paintBackgroundImg(){
//     const backgroundImages = document.createElement("img");
//     backgroundImages.src = `${chosenImage}`;
//     document.body.style.backgroundImage = `url('${chosenImage}')`;
// }

paintBackgroundImg();




