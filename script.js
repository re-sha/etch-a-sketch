const container = document.querySelector("#container");

//Create a sample grid
for (let i = 0; i < 256 ; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.addEventListener("mouseover", () => {
                newCell.style.background = "#DB8780";
        });
        container.appendChild(newCell);
}

let number = parseInt(prompt("Enter the number of squares per side for your grid (1-100)"));

//recreate container
container.innerHTML = "";
container.style.setProperty("--grid--size", number);

        for (let i = 0 ; i < number*number ; i++) {
                const aCell = document.createElement("div");
                aCell.classList.add("cell");
                aCell.addEventListener("mouseover", () => {
                        aCell.style.background = "#DB8780";
                });
                container.appendChild(aCell);
        }