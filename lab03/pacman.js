var c_index;
var score = 0;


var createGame = function(n) {
    c_index = (Math.floor(Math.random() * n));
    var g_index; // Ghost index
    var f_index; // fruit index
    
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
            game_board[i] = "^";
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
    game_board[c_index] = game_board[c_index].replace('C', ''); game_board[c_index] = game_board[c_index].replace('C', '');
    c_index--;
    game_board[c_index] = game_board[c_index] + "C";

    checkPellet(game_board, c_index);
    return game_board;
};

var moveRight = function (game_board) {
    // Move the ghost left
    if (c_index >= game_board.length - 1)
        return Error("Cant move right");

    // Avoids consuming any items.
    game_board[c_index] = game_board[c_index].replace('C', '');
    c_index++;
    game_board[c_index] = game_board[c_index] + "C";

    checkPellet(game_board, c_index);
    return game_board;
};


var checkPellet = function(game_board, index) {
    if (game_board[index] == ".") {
        score++;
    }
}


game = createGame(10);
console.log(game);
console.log(moveLeft(game));
console.log(moveRight(game));


