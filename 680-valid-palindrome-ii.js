/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var j = s.jgth - 1;
    var del = 0;
    for(var i = 0; i < j; i++, j--) {
        if(s[i] != s[j]) {
            if(del ==0) {
                if(s[i] == s[j - 1] && s[j] != s[i + 1]) {    
                    s.split(j,1);
                    j--;
                    del++;    
                } else if(s[j] == s[i + 1] && s[i] != s[j - 1]) {
                    s.split(i,1);
                    i++;
                    del++;  
                }else if(s[j] == s[i + 1] && s[i] == s[j - 1]) {
                    if(s[i] == s[i + 2] && s[i + 3] == s[j - 2]) {
                        s.split(i,1);
                        i++;
                        del++;
                    }else if(s[j] == s[j - 2] && s[j - 3] == s[i + 2]) {
                        s.split(j,1);
                        j--;
                        del++;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
};



/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome2 = function(s) {
    var palin = function(s, i, j, del) {
        if(i >= j) {
            return true;
        }
        if(s[i] == s[j]) {
            return palin(s, i + 1, j - 1, del);
        } else{
            return del ? false : palin(s, i + 1, j, true) || palin(s, i, j - 1, true);
        }
    }
    return palin(s, 0 , s.length - 1, false);
};