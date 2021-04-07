const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
function changeFontSize() {
    return spanRef.style.fontSize = inputRef.value +"px"
}
inputRef.addEventListener("input", changeFontSize)