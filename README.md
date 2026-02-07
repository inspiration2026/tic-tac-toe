# Tic-Tac-Toe Game 🕹️
A simple JavaScript game application where users can play a game "Tic-Tac-Toe" with AI Generated Cyberpunk style Symbols. 
Educational project built while passing JavaScript course in Odin Project.

For educational purposes project build without global variables. 

# Features 👨‍💻
Custom names on the scoreboard
Display score during a game
Congratulations screen
Hover effects on buttons and playfield
Clean styling in the dark tones
Prevent marking playfield more than once
Prevent hover effect on already selected fields

# Method used ⌨️
Factory functions
IIFEs (Immediately Invoked Function Expressions)
Flex & Grid

# Author ✍️
Roman Suslov (Learning JavaScript in 2025–2026)



# initial-brain-storm 🧠
- each field equal number 1 to 9 (better use f1-f9)
- when player make a move - add his decision (variable) to his object
- after each move check object for having any winning 
combination of variables (example: f1, f2, f3 or f1, f5, f9) - 8 combos !
- aslo check if other player's object already have 
same value - if so - don't allow this move
- the other way is eliminate variable from game array after each move and next move check if it's hasn't that variable - block a move.
- if there is winning combination - finish the game and congrats the winner
- if no variables left in game array and there are no winning combination - tie, start again
- only after working console version - make HTML and CSS to interract with real user.

