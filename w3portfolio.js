const menuButton = document.querySelector(".menu1");
const menu = document.querySelector(".navbar__links");
const closeBtn = document.querySelectorAll(".navbar__link");


const overlay = document.querySelector("#overlay");

const overlayimg = document.querySelector(".overlayimg");
const imgs = document.querySelectorAll(".imgheader img");
const imgBlock = document.querySelector(".imgBlock");
console.log(overlayimg);
menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    overlay.classList.toggle("show");
  });

closeBtn.forEach((item)=>{
    item.addEventListener("click", () => {
        menu.classList.toggle("navbar__open");
        overlay.classList.toggle("show");
    })
});


overlay.addEventListener("click", () =>{
    overlay.classList.toggle("show");
    menu.classList.toggle("navbar__open");
    // overlay.classList.remove("show");
    // menu.classList.remove("navbar__open");
});

// imgs.forEach(function(img){
//     img.addEventListener("click", function(){
//         console.log(img.src)
//         // overlayimg.style.display="block";
//         imgBlock.innerHTML = `<img src="${img.src}" alt="image">`
        
//     })
// })



