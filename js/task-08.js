function randomizer () {
    return Math.floor(Math.random() * 255)
}

const mainDivRef = document.getElementById("boxes");
const inputRef = document.querySelector("input");
const renderBtnRef = document.querySelector("[data-action='render']");
const destroyBtnRef = document.querySelector("[data-action='destroy']")

let boxQty;
inputRef.addEventListener('input', () => {
    boxQty = + inputRef.value;
})

function createBoxes(amount) {
    let boxes = [];
    for (let i = 0; i < amount; i++){
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`;
        boxes.push(box)
    }
    return mainDivRef.append(...boxes) 
}

function destroyBoxes() {
    return mainDivRef.innerHTML = "";
}

renderBtnRef.addEventListener('click', () => {
    createBoxes(boxQty)
});
destroyBtnRef.addEventListener('click', destroyBoxes);


