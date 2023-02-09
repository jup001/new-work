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

