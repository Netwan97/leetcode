var game = function(guess, answer) {
    var count = 0;
    for(var i = 0; i < 3; i++) {
        if(guess[i] == answer[i]) {
            count++;
        }
    }
    return count;
};
