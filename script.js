"use strict";

const userInput = document.querySelector("button");
const gridContainer = document.querySelector("#container");

function createGrid(gridSize) {

    gridContainer.innerHTML = ""; // Resets the grid
    gridContainer.style.border = "1px solid #000";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.className = "square";
        gridContainer.appendChild(square);
    }
}


// To make sure only numbers equal to 100 or lower are allowed
function handleUserInput() {
    const gridSize = prompt("Please enter a number (maximum is 100):");

    if (gridSize > 100 || gridSize != parseInt(gridSize)) {
        alert("Incorrect value! Please try again");
    } else {
        createGrid(gridSize);
    }
}


userInput.addEventListener("click", handleUserInput);


gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches(".square")) {
        e.target.style.backgroundColor = "black";
    }
});