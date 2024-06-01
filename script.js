const container = document.querySelector("#container");
for (let i = 0; i < 256 ; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.addEventListener("mouseover", () => {
                newCell.style.background = "pink";
        })
        container.appendChild(newCell);
}
