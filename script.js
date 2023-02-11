const btn = document.getElementById("btn")
const hiden = document.querySelectorAll(".hiden")
const sel = document.getElementById("sel")
btn.addEventListener("mouseover", () => {
    hiden[0].classList.toggle("hiden")
})
sel.addEventListener("mouseover", () => {
    hiden[0].classList.toggle("hiden")
})
btn.addEventListener("mouseout", () => {
    hiden[0].classList.toggle("hiden")
})
sel.addEventListener("mouseout", () => {
    hiden[0].classList.toggle("hiden")
})
const hide = document.getElementById("hide")
const btn2 = document.getElementById("btn2")
const textpage = document.getElementById("textpage")
btn2.addEventListener("click", () => {
    hide.classList.toggle("none")
})
btn2.addEventListener("click", () => {
    textpage.classList.toggle("textpage")
})