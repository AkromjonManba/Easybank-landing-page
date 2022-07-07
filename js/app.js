const btn = document.querySelector("#btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("fa-times")
    menu.classList.toggle("active")
})


window.onscroll = () => {
    btn.classList.remove("fa-times")
    menu.classList.remove("active")
}