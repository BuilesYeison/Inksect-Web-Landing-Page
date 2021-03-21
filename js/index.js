const galleryImgs = document.querySelectorAll(".gallery .card img"); //All the images 
const imgModal = document.querySelector(".modal img")
const closeModal = document.querySelector(".modal .bx-x");
const nextImage = document.querySelector(".modal .bx-right-arrow-alt")
const backImage = document.querySelector(".modal .bx-left-arrow-alt")
const modal = document.querySelector(".modal")
var imgsLength = galleryImgs.length
var imgIndexCount = 0

nextImage.addEventListener('click',(evt)=>switchImage(1));
backImage.addEventListener('click',(evt)=> switchImage(-1));
closeModal.addEventListener('click', closeModalFunc);
galleryImgs.forEach((images) => {
    images.addEventListener('click', (event) => {
        //modal.classList.toggle("opacity")
        modal.style.display = "inherit"; //display modal
        let srcImage = event.target.src
        imgModal.src = srcImage

        for(i=0;i<imgsLength;i++){
            //get actual img index
            if(srcImage == galleryImgs[i].src){
                imgIndexCount = i
            }
        }
    });
});

function switchImage(n){
    //increase or decrease index and get/set image. If index is less or more than the count of all of the images, change index
    imgIndexCount +=n
    if(imgIndexCount>=imgsLength){
        imgIndexCount = 0
    }else if(imgIndexCount < 0){
        imgIndexCount = imgsLength -1
    }
    let srcImage = galleryImgs[imgIndexCount].src
    imgModal.src=srcImage
}

function closeModalFunc() {
    modal.style.display = "none";
}

//google maps
function iniciarMap(){
    var coord = {lat:6.2443695 ,lng: -75.6512524};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}