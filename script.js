let grid = true;
let size = 15;
let color = document.querySelector(".colorPicker").value;
let isRainbow = false;
// let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let rainbowColors = ["rgb(200, 190, 255)","rgb(222, 168, 248)", "rgb(168, 222, 258)","rgb(189, 250, 205)",
         "rgb(243, 250, 189)","rgb(250, 227, 189)","rgb(248, 172, 171)","rgb(254, 170, 212)"]
let rainbowIndex = 0;

createBoard(size);

function increasePixels() {
     if(size <= 100) {
        size += 5;
        document.querySelector(".board").remove(); 
        createBoard(size);
     }
}

function decreasePixels() {
    if(size > 5) {
    size -= 5;
    document.querySelector(".board").remove();
    createBoard(size);
    }
}
 let isDrawing = false;

document.addEventListener("mousedown", () => isDrawing = true);
    

document.addEventListener("mouseup", () => isDrawing = false);
    


function createBoard(size) {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.classList.add("board");
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            tile.setAttribute("draggable", "false");
            tile.style.userSelect = "none";
            tile.classList.add("tile");
            if(!grid) tile.style.border = 0;
            tile.addEventListener("mousedown", e => {
                if(isRainbow) {
                    e.target.style.background = rainbowColors[rainbowIndex];
                    if(++rainbowIndex == 8) rainbowIndex = 0;

                }else{
                    e.target.style.background = color;
                }
                
                
            });
            tile.addEventListener("mouseover", e => {
                 if(isRainbow && isDrawing) {
                    e.target.style.background = rainbowColors[rainbowIndex];
                    if(++rainbowIndex == 8) rainbowIndex = 0;

                }else{
                    if(isDrawing) e.target.style.background = color;
                } 
            });
            row.appendChild(tile);
        }
        board.appendChild(row);  
    }
    body.appendChild(board);
}

function clearBoard() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => tile.style.background = "whitesmoke");
}

function toggleGrid (){
    const tiles = document.querySelectorAll(".tile");
    if(grid) {
        tiles.forEach((tile) => tile.style.border = 0);
        grid = false;
    }else {
        tiles.forEach((tile) => tile.style.border = "1px solid rgb(69, 69, 69)");
        grid = true;
    }   
}

document.querySelector(".clear").addEventListener("click", clearBoard);
document.querySelector(".toggle").addEventListener("click", toggleGrid);
document.querySelector(".increase").addEventListener("click", increasePixels);
document.querySelector(".decrease").addEventListener("click", decreasePixels);


const colorPicker = document.querySelector(".colorPicker");

colorPicker.addEventListener("input", (e) => {
    color = e.target.value;

});

const rainbow = document.querySelector(".rainbow");

rainbow.addEventListener("click", () => isRainbow = !isRainbow);

rainbow.addEventListener("click", function (e) {
    if(isRainbow){
        e.target.style.background = `linear-gradient(to right,rgb(200, 190, 255) 0%,rgb(222, 168, 248) 10%,rgb(168, 222, 258) 30%,rgb(189, 250, 205) 42%,
         rgb(243, 250, 189) 58%,rgb(250, 227, 189) 70%,rgb(248, 172, 171) 95%,rgb(254, 170, 212) 100%)`;
        
    }else {
        e.target.style.background = "white";
    }    

});
