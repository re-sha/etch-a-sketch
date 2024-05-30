const container = document.querySelector("#container");
for (let i = 0; i < 256 ; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
}
