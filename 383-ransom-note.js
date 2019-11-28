/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split("");
    ransomNote = ransomNote.split("");
    function match(a, index, s){
        if(magazine.indexOf(a) === -1) return false;
        var num = 0;
        for(var i = 0; i < s.length; ++i) {
            if(s[i] === a){
                --num;
                s.splice(i,1);
                --i;
                
            }
        }
        for(i in magazine) {
            if(magazine[i] === a) ++num;   
            if(num >= 0) return true;
        }
        return false;
    }
    return ransomNote.every(match);
};