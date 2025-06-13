let grid = true;
let size = 15;

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

function createBoard(size) {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.classList.add("board");
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            if(!grid) tile.style.border = 0;
            tile.addEventListener("mouseover", function(e){
                e.target.style.background = "grey";
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




