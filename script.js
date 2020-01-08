// Initializing grid and default size of grid
const grid = document.querySelector(".grid");

//Variables and Constants
const clrButton = document.getElementById("clearButton");
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const sizeSlider = document.getElementById("sizeSlider");
var red = green = blue = 0; 
var colour = `rgba(${red}, ${green}, ${blue}, 1)`;


//Event Listeners
//Clear Button clears grid
clrButton.addEventListener("click", (e) => {
    const squares = document.querySelectorAll('.grid > div');
    //Set each square's color to white
    squares.forEach((sq) => {
        sq.style["background-color"] = "white";
    });
});

//RGB Sliders adjust colours
//Change red value
redSlider.onchange = function(){
    red = this.value;
    colour = `rgba(${red}, ${green}, ${blue}, 1)`;
    hover(colour);
    const preview = document.getElementById("colourPreview");
    preview.setAttribute("style",
        `background-color: ${colour};`);
}

//Change green value
greenSlider.onchange = function(){
    green = this.value;
    colour = `rgba(${red}, ${green}, ${blue}, 1)`;
    hover(colour);
    const preview = document.getElementById("colourPreview");
    preview.setAttribute("style",
        `background-color: ${colour};`);
}

//Change blue value
blueSlider.onchange = function(){
    blue = this.value;
    colour = `rgba(${red}, ${green}, ${blue}, 1)`;
    hover(colour);
    const preview = document.getElementById("colourPreview");
    preview.setAttribute("style",
        `background-color: ${colour};`);
}

//Slider resizes squares
sizeSlider.onchange = function(){
    const squares = document.querySelectorAll(".grid > div");
    //Remove each square
    grid.setAttribute("style", 
        `grid-template-columns: repeat(${this.value}, 1fr);
         grid-template-rows: repeat(${this.value}, 1fr);`);    
    squares.forEach((sq) => {
        sq.parentNode.removeChild(sq);
    });
    const numSqaures = document.getElementById("sliderInput");
    numSqaures.innerHTML = this.value;
    createGrid(this.value);

}

//Initialize grid
createGrid(sizeSlider.value);

//Creates a grid with size rows and size columns 
function createGrid(size) {
    grid.setAttribute("style", 
        `grid-template-columns: repeat(${size}, 1fr);
         grid-template-rows: repeat(${size}, 1fr);`);
    //Creates squares to fill the grid; appends these elements to the grid as grid items
    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.setAttribute("style",
            `display: inline-grid;
             padding: ${350 / size}px;`);
        grid.appendChild(square); 
    }
    hover(colour);
}

//Changes color of square when hovered over
function hover(colour){
    const squares = document.querySelectorAll('.grid > div');
    squares.forEach((sq) => {
        //Event listener for each square changes color when hovering mouse over it 
        sq.addEventListener("mouseover", (e) => {
            e.target.style["background-color"] = colour;
        });
    });
}