/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if(text.length < 7) return 0;
    var a = b = n = l = o = 0;
    for(i in text) {
        switch(text[i]) {
            case "a":   ++a; break;
            case "b":   ++b; break;
            case "n":   ++n; break;
            case "l":   ++l; break;
            case "o":   ++o; break;
        }
    }
    return Math.min(a, b, n, Math.floor(l / 2), Math.floor(o / 2)); 
};