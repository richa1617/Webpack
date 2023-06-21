const apple =require("./apple.jpg")


function addImage(){
    const img= document.createElement("img")
    img.alt="apple"
    img.width =300 ;
    img.src=apple

    const body=document.querySelector("body")
    body.appendChild(img)

}

module.exports=addImage