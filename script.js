const container = document.querySelector("#container");
const askBtn = document.querySelector("#askBtn");

container.style.setProperty("--grid-size",16);
//Create a sample grid
function createGrid (num) {
        for (let i = 0; i < num*num ; i++) {
                const newCell = document.createElement("div");
                newCell.classList.add("cell");
                newCell.addEventListener("mouseover", () => {
                        newCell.style.background = "#DB8780";
                });
                container.appendChild(newCell);
        }
}
createGrid(16);

function changeGrid () {
        let choice = parseInt(prompt("Enter the number of squares per side for your grid (1-100)"));
        if (isNaN(choice)) {
                alert("Please enter a number");
                return;
        }
        if (choice < 1 || choice > 100) {
                alert("Please enter a number between 1 and 100 (inclusive).");
                return;
       }
        //recreate container
        container.innerHTML = "";
        container.style.setProperty("--grid-size", choice);

                for (let i = 0 ; i < choice*choice ; i++) {
                        const aCell = document.createElement("div");
                        aCell.classList.add("cell");
                        aCell.addEventListener("mouseover", () => {
                                aCell.style.background = "#DB8780";
                        });
                        container.appendChild(aCell);
                }
}
askBtn.addEventListener("click", changeGrid);
