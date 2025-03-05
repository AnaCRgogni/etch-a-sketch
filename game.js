document.addEventListener("DOMContentLoaded", function() {
    const gridDiv = document.querySelector(".container");
    const gridSizeInput = document.querySelector("#gridSize");
    const generateGridBtn = document.querySelector("#generateGrid");
    const colorButtons = document.querySelectorAll(".color-btn");
    let currentColor = "blue"; // Default color
    
    function createGrid(size) {
        gridDiv.innerHTML = ''; // Clear previous grid
        for (let i = 0; i < size; i++) {
            const row = document.createElement("div");
            row.style.display = "flex";
            for (let j = 0; j < size; j++) {
                let cell = document.createElement("div");
                cell.className = "cell";
                row.appendChild(cell);
            }
            gridDiv.appendChild(row);
        }
    }

    createGrid(30); // Initialize with a 30x30 grid

    // Event listener to change cell color
    gridDiv.addEventListener("click", function(event) {
        if (event.target.classList.contains("cell")) {
            event.target.style.backgroundColor = currentColor;
        }
    });

    // Button to regenerate the grid with the new size
    generateGridBtn.addEventListener("click", function() {
        const newSize = parseInt(gridSizeInput.value);
        if (newSize > 30) {
            alert("Maximum grid size is 30.");
        } else if (newSize <= 0) {
            alert("Grid size must be at least 1.");
        } else {
            const confirmRegenerate = confirm("Are you sure you want to regenerate the grid? All your work will be lost.");
            if (confirmRegenerate) {
                createGrid(newSize);
            }
        }
    });

    // Color selection buttons
    colorButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            currentColor = button.style.backgroundColor;
        });
    });
});