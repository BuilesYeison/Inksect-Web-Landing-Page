const galleryImgs = document.querySelectorAll(".gallery .card img");
const imgModal = document.querySelector(".modal img")
const closeModal = document.querySelector(".modal .bx-x");
const nextImage = document.querySelector(".modal .bx-right-arrow-alt")
const backImage = document.querySelector(".modal .bx-left-arrow-alt")
const modal = document.querySelector(".modal")
var imgsLength = galleryImgs.length
var imgIndexCount = 0

/*nextImage.onclick = switchImage(1);
backImage.onclick = switchImage(-1);*/
for(i=0;i<galleryImgs.length;i++){
    console.log(galleryImgs[i].src)
}
nextImage.addEventListener('click',switchImage(1));
backImage.addEventListener('click',switchImage(-1));
closeModal.addEventListener('click', closeModalFunc);
galleryImgs.forEach((images) => {
    images.addEventListener('click', (event) => {
        modal.style.display = "inherit";
        let srcImage = event.target.src
        imgModal.src = srcImage
    });
});

function switchImage(n){
    imgIndexCount +=n
    console.log(imgIndexCount)
}

function closeModalFunc() {
    modal.style.display = "none";
    console.log(imgIndexCount)
}