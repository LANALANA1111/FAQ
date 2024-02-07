const ptags = document.querySelectorAll("#rame")
const htwo = document.querySelectorAll(".htwosss")
const arrows =document.querySelectorAll(".arrows")




ptags.forEach((ptags) => {
    ptags.addEventListener("click", () => {
       htwo.style.display = "block"
       arrows.style.transform = "rotate(180deg)"
       console.log("hello")
    })

});









// ptags.addEventListener("click", () => {
//     if(htwo.style.display === "none"){
//         htwo.style.display = 'block'
//         arrows.style.transform = 'rotate(180deg)'
//     }else{
//         htwo.style.display = 'none'
//         arrows.style.transform = 'rotate(0deg)'
//     }
// })
