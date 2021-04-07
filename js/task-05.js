const inputRef = document.getElementById("name-input");
const greetingRef = document.getElementById("name-output");

inputRef.addEventListener('input', () => {
    if (inputRef.value !== "") {
    greetingRef.textContent = inputRef.value;        
    }
    else {
        greetingRef.textContent = "незнакомец";
    }
})
