var createGame = function(n) {
    var c_index = (Math.floor(Math.random() * n));
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
            game_board[i] = "*";
        }
    }
    
    return game_board;
};


console.log(createGame(10));