let mainText = document.getElementById("main-input")
let addButton = document.querySelector("#AddButton")
let ClearButton = document.querySelector("#ClearButton")
let paragraph = document.querySelector(".text-toDoList")

addButton.addEventListener("click", () => {
    let text_p = document.createElement("p")
    paragraph.appendChild(text_p)
    text_p.innerHTML = mainText.value
    mainText.value = ''

    text_p.addEventListener("click", () => {
        text_p.style.textDecoration = "line-through 2px solid red"
    })

    text_p.addEventListener("dblclick", () => {
        text_p.remove()
    })

    ClearButton.addEventListener('click', () => {
        text_p.remove()
    })

})