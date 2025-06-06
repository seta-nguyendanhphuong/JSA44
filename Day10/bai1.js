let newDiv = document.createElement("div")
newDiv.innerText = "Hello"

// Laays
let output = document.querySelector(".output")
let my_input = document.getElementById("my_input")


let my_button = document.getElementById("my_button")
my_button.addEventListener("click", function() {
    let newDiv = document.createElement("div")
    newDiv.innerText = Number(my_input.value)
    output.appendChild(newDiv)

    my_input.value = ""
})