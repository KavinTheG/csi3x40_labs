
// Keep a track of the index of the pacman
var c_index;
var g_index; // Ghost index

// Keep a track on the score
var score = 0;

// Keep a track on the number of pellets
var pelletNum = 0;

// Keep a track on the level
var level = 1;


var createGame = function(n) {
    c_index = (Math.floor(Math.random() * n));
    var f_index; // fruit index
    pelletNum = n - 2;

    do {
        g_index = Math.floor(Math.random() * n);
    } while (g_index == c_index);

    do {
        f_index = Math.floor(Math.random() * n);
    } while (f_index == c_index || f_index == g_index);
    

    var game_board = new Array(n);
    for (var i=0; i<n; i++) {
        if (i == c_index) {
            game_board[i] = "C";
        } else if (i == g_index) {
            game_board[i] = "^.";
        } else if (i == f_index) {
            game_board[i] = "@";
        } else {
            game_board[i] = ".";
        }
    }
    
    return game_board;
};


var moveLeft = function(game_board) {
    // Move the ghost left
    if (c_index <= 0)  
        return Error("Cant move left");
    
    // Avoids consuming any items.
    game_board[c_index] = '';
    c_index--;

    // Checks for pellets 
    checkPellet(game_board, c_index);

    game_board[c_index] = "C";

    
    return game_board;
};

var moveRight = function (game_board) {
    // Move the ghost left
    if (c_index >= game_board.length - 1)
        return Error("Cant move right");

    // Avoids consuming any items.
    game_board[c_index] = '';
    c_index++;

    checkPellet(game_board, c_index);
    game_board[c_index] = game_board[c_index] + "C";

    return game_board;
};


var checkPellet = function(game_board, index) {
    if (game_board[index] == ".") {
        score++;
        pelletNum--;

        if (pelletNum == 0) {
            level++;
            game_board = createGame(level * 10);
        }
    }
}

var ghostMovement = function(game_board) {
    var randomIndex = function(max) {
        return Math.floor(Math.random() * max);
    }

    var randomDirection = Math.random() < 0.5 ? 0 : 1; // 0 = left, 1 = right

    setInterval(function() {
        if (randomDirection == 0) {
            moveLeft(game_board);
        } else {
            moveRight(game_board);
        }
    }, 2000);

}


game = createGame(10);
console.log(game);
console.log(moveLeft(game));
console.log(moveRight(game));


