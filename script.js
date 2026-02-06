(function() {
    const fields = document.querySelectorAll(".field");
    const result = document.getElementById("result");

    fields.forEach (field => {
        field.addEventListener ("click", () => {
            const position = field.dataset.indexNumber;
        if (!GameBoard.gameBoard.includes(position)) {return;}
            GameBoard.playMove(position);
        if (checkWinner(GameBoard.playerOne)) {
            console.log ("The winner is Player 1");
            GameBoard.cleanField();
            return;
        } else if (checkWinner(GameBoard.playerTwo)) {
            console.log ("The winner is Player 2");
            GameBoard.cleanField();
            return;
        } else if (GameBoard.gameBoard.length === 0) {
            alert ("It's a Tie");
            GameBoard.cleanField();
            return;
        };
        if (GameBoard.currentPlayer === "X") {
            field.classList.add ("o")
        } else if (GameBoard.currentPlayer === "O") {
            field.classList.add ("x")
        };    
        })
    })
})();

const GameBoard = {
    gameBoard: ["1","2","3","4","5","6","7","8","9"],
    currentPlayer: "X",
    playerOne: {symbol: "X", field:[]},
    playerTwo: {symbol: "O", field:[]},
    playMove(choice) {
        if (this.currentPlayer === this.playerOne.symbol) {
            this.playerOne.field.push (choice);
            this.currentPlayer = "O"
        } else {
            this.playerTwo.field.push (choice);
            this.currentPlayer = "X"
        };
        let i = this.gameBoard.findIndex(x => x === choice);
        this.gameBoard.splice(i,1);
    },
    cleanField() {
        const fields = document.querySelectorAll(".field");
        fields.forEach (field => {
            field.classList.remove ("x","o");
        });
        this.gameBoard = ["1","2","3","4","5","6","7","8","9"];
        this.currentPlayer = "X";
        this.playerOne = {symbol: "X", field:[]};
        this.playerTwo = {symbol: "O", field:[]};
    }
}

// function getChoice() {
//     const choice = prompt("enter number");
//     return choice;
// }

function checkWinner (player) {
    const winningLines = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],
        ["1","5","9"],
        ["3","5","7"]
    ];
    const result = winningLines.some(line => line.every(x => player.field.includes(x)));
    return result;
}
// function gameConsole() {
//     while (true) {
//         GameBoard.playMove(getChoice());
//         console.log(GameBoard);
//         if (checkWinner(GameBoard.playerOne)) {
//             console.log ("The winner is Player 1");
//             break;
//         } else if (checkWinner(GameBoard.playerTwo)) {
//             console.log ("The winner is Player 2");
//             break;
//         } else if (GameBoard.gameBoard.length === 0) {
//             console.log ("It's a Tie");
//             break;
//         }   
//     console.log(GameBoard);
//     }
// }
// gameConsole();
