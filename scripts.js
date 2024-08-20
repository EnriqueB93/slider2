let btNext = document.querySelector(".next")
let btBack = document.querySelector(".back")

let content = document.querySelectorAll(".item")
let count = content.length
let active = 0

btNext.onclick = () => {
    let activeold = document.querySelector(".active")
    activeold.classList.remove("active")

    active = active >= count - 1 ? 0 : active + 1
    content[active].classList.add("active")


}

btBack.onclick = () => {
    let activeold = document.querySelector(".active")
    activeold.classList.remove("active")

    active = active <= 0 ? count - 1 : active - 1
    content[active].classList.add("active")

}


