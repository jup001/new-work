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
    hide.classList.add("none")
})
btn2.addEventListener("click", () => {
    textpage.classList.toggle("textpage")
})
btn2.addEventListener("click", () => {
    search.classList.add("search")
})
btn2.addEventListener("click", () => {
    side.classList.remove("sidebar2")
})
btn2.addEventListener("click", () => {
    main.classList.remove("main2")
})
btn2.addEventListener("click", () => {
    home.classList.remove("home2")
})
const home = document.getElementById("home2")
const btn3 = document.getElementById("btn3")
const side = document.getElementById("sidebar")
const mail = document.getElementById("main")
const search = document.getElementById("search")
btn3.addEventListener("click", () => {
    home.classList.add("home2")
})
btn3.addEventListener("click", () => {
    hide.classList.add("none")
})
btn3.addEventListener("click", () => {
    side.classList.add("sidebar2")
})
btn3.addEventListener("click", () => {
    main.classList.add("main2")
})
btn3.addEventListener("click", () => {
    search.classList.remove("search")
})
btn3.addEventListener("click", () => {
    hide.classList.add("none")
})
btn3.addEventListener("click", () => {
    textpage.classList.add("textpage")
})