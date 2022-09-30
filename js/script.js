const imagenes = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg",
    "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg",
    "unterdenlinden.jpeg", "westhafen.jpeg"];

let info = document.getElementById("info")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")

/*Tengo que indicar la ruta de las imagenes para que sepa donde encontrarlo. Por eso ponemos "imagenes/" justo antes. Si esa carpeta de imagenes estuviera dentro de una carpeta assets, pondríamos "assets/imagenes/" */


const mostrar = () => {

    info.textContent = img1.src.slice(img1.src.lastIndexOf("/")+1,img1.src.lastIndexOf("."))
 
}
const mostrar2 = () => {

    info.textContent = img2.src.slice(img1.src.lastIndexOf("/")+1,img2.src.lastIndexOf("."))
   

}
const mostrar3 = () => {
    info.textContent = img1.src.slice(img3.src.lastIndexOf("/")+1,img3.src.lastIndexOf("."))
  
}
const mostrar4 = () => {
    info.textContent = img1.src.slice(img4.src.lastIndexOf("/")+1,img4.src.lastIndexOf("."))
  
}
const mostrar5 = () => {
    info.textContent =img5.src.slice(img1.src.lastIndexOf("/")+1,img5.src.lastIndexOf("."))
  
}
const mostrar6 = () => {
    info.textContent = img6.src.slice(img1.src.lastIndexOf("/")+1,img6.src.lastIndexOf("."))
  
}
const mostrar7 = () => {
    info.textContent = img7.src.slice(img1.src.lastIndexOf("/")+1,img7.src.lastIndexOf("."))
  
}
const mostrar8 = () => {
    info.textContent = img8.src.slice(img1.src.lastIndexOf("/")+1,img8.src.lastIndexOf("."))
  
}






img1.addEventListener("click", mostrar)

img2.addEventListener("click", mostrar2)

img3.addEventListener("click", mostrar3)

img4.addEventListener("click", mostrar4)

img5.addEventListener("click", mostrar5)

img6.addEventListener("click", mostrar6)

img7.addEventListener("click", mostrar7)

img7.addEventListener("click", mostrar8)

