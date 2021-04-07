const inputRef = document.getElementById("validation-input");
const neededSymbols = +inputRef.getAttribute("data-length")

function checkInput() {
    if (inputRef.value.length < neededSymbols) {
        inputRef.classList.add("invalid")
        inputRef.classList.remove("valid")
    }
    else {
        inputRef.classList.add("valid")
        inputRef.classList.remove("invalid")
    }
}
inputRef.addEventListener('blur', checkInput)
