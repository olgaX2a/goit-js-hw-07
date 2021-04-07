const counterRef = document.getElementById("value")
let counterValue = +counterRef.textContent;
const incrementBtnRef = document.querySelector("[data-action='increment']")
const decrementBtnRef = document.querySelector("[data-action='decrement']")

function increment() {
    counterValue = +counterValue + 1;
    return counterRef.textContent = counterValue 

}

function decrement() {
    counterValue = +counterValue - 1;
    return counterRef.textContent = counterValue 
};

incrementBtnRef.addEventListener("click", increment)
decrementBtnRef.addEventListener("click", decrement)

