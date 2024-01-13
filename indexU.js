let content = document.querySelector("content");
let area = document.getElementById("area");
let cell = document.getElementsByClassName("cell");

let player = "x";
let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

for (let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {
    let data = [];


    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert("zanyata")
        return;
    }

    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if (checkWin(data)) {
        restart("HAXTEC   " + player);
       
    }

    player = player == "x" ? "o" : "x";
}

function checkWin(data) {
    for (let i in winIndex) {
        let win = true;
        for (let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if (ind == -1) {
                win = false;
            }
        }

        if (win) return true;
    }
    return false;
}



function restart(text) {
    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
}