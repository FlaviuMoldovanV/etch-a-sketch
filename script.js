"use strict";

const userInput = document.querySelector("button");
const gridContainer = document.querySelector("#container");


userInput.addEventListener("click", () => {

    let gridSize = prompt("Please write a number(The maximum is 100) :");

    if ((gridSize > 100) || (gridSize != parseInt(gridSize))) {
        alert("Incorrect Value! Please try again");
    }

    else {

        gridContainer.innerHTML = "";
        gridContainer.style.border = "1px solid #000";
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {

            const square = document.createElement("div");
            square.className = "square";
            gridContainer.appendChild(square);

        }

        document.addEventListener("mouseover", (e) => {
            if (e.target.matches(".square")) {
                e.target.style.backgroundColor = "black";
            }
        })

    }
})