const GameBoard = {
    gameBoard: ["1","2","3","4","5","6","7","8","9"],
    currentPlayer: "X",
    playerOne: {symbol: "X", field:[]},
    playerTwo: {symbol: "O", field:[]},
    playMove(choice) {
        if (this.gameBoard.includes(choice)) {
            if (this.currentPlayer === this.playerOne.symbol) {
                this.playerOne.field.push (choice);
                this.currentPlayer = "O"
            } else {
                this.playerTwo.field.push (choice);
                this.currentPlayer = "X"
            };
            let i = this.gameBoard.findIndex(x => x === choice);
            this.gameBoard.splice(i,1);
        } else return;
    }
}

function getChoice() {
    const choice = prompt("enter number");
    return choice;
}

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
function game() {
    while (true) {
        GameBoard.playMove(getChoice());
        console.log(GameBoard);
        if (checkWinner(GameBoard.playerOne)) {
            console.log ("The winner is Player 1");
            break;
        } else if (checkWinner(GameBoard.playerTwo)) {
            console.log ("The winner is Player 2");
            break;
        } else if (GameBoard.gameBoard.length === 0) {
            console.log ("It's a Tie");
            break;
        }   
    console.log(GameBoard);
    }
}
game();