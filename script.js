



(function() {
    const fields = document.querySelectorAll(".field");

    fields.forEach (field => {
        field.addEventListener ("click", () => {
            const position = field.dataset.indexNumber;
            if (!GameBoard.gameBoard.includes(position)) {return;}
            GameBoard.playMove(position);
            if (GameBoard.currentPlayer === "X") {
                field.classList.add ("o")
            } else if (GameBoard.currentPlayer === "O") {
                field.classList.add ("x")
            };    
            if (checkWinner(GameBoard.playerOne)) {
                showWinScreen(GameBoard.playerOne.name, GameBoard.playerOne.symbol);
                GameBoard.playerOne.score++;
                GameBoard.scoreAdjust();
                return;
            } else if (checkWinner(GameBoard.playerTwo)) {
                showWinScreen(GameBoard.playerTwo.name, GameBoard.playerTwo.symbol);
                GameBoard.playerTwo.score++;
                GameBoard.scoreAdjust();
                return;
            } else if (GameBoard.gameBoard.length === 0) {
                showTieScreen();
                return;
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
        this.playerOne.field = [];
        this.playerTwo.field = [];
    },
    scoreAdjust() {
        const name1 = document.getElementById("name1");
        const name2 = document.getElementById("name2");
        const score1 = document.getElementById("score1");
        const score2 = document.getElementById("score2");
        const restartBtn = document.getElementById("restart");

        name1.textContent = this.playerOne.name;
        name2.textContent = this.playerTwo.name;
        score1.textContent = this.playerOne.score;
        score2.textContent = this.playerTwo.score;

        restartBtn.addEventListener ('click', function() {
            GameBoard.restart();
        })
    },
    start() {
        const player1 = document.getElementById("playerOne");
        const player2 = document.getElementById("playerTwo");
        const gameStart = document.getElementById("gameStart");
        const startForm = document.getElementById("startForm");

        player1.value = "";
        player2.value = "";
        gameStart.classList.remove("hidden");
        player1.focus();

        startForm.addEventListener ('submit', e => {
            e.preventDefault();
            gameStart.classList.add("hidden");
            GameBoard.playerOne.name = player1.value;
            GameBoard.playerTwo.name = player2.value;
            GameBoard.playerOne.score = 0;
            GameBoard.playerTwo.score = 0;
            GameBoard.scoreAdjust()
        })
    },
    restart() {
        this.cleanField();
        this.playerOne = {symbol: "X", field:[]};
        this.playerTwo = {symbol: "O", field:[]};
        this.start();
    }
};
    (function () {
        GameBoard.start();
    })();
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

const overlayContainer = document.getElementById("overlay-container");
const winTitle = document.getElementById("win-title");
const winMessage = document.getElementById("win-message");
const playAgain = document.getElementById("play-again");

function showWinScreen(name,symbol) {
    winTitle.textContent   = "Congratulations!";
    winMessage.textContent = `Player ${name} "${symbol}" wins!`;

    overlayContainer.classList.remove('hidden');
}

function showTieScreen() {
    winTitle.textContent   = "It's a Tie!";
    winMessage.textContent = "No winner this time";

    overlayContainer.classList.remove('hidden');
}

playAgain.addEventListener('click', () => {
    overlayContainer.classList.add('hidden');
    GameBoard.cleanField();
});

overlayContainer.addEventListener('click', e => {
    if (e.target === overlayContainer) {
        overlayContainer.classList.add('hidden');
        GameBoard.cleanField();
    }
});