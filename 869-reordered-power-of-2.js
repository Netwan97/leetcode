/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    var len = N.toString().length;
    var multwo = [];
    var b = Math.pow(10, len - 1);
    var low = Math.pow(2, Math.ceil(Math.log2(b)));
    var up = b * 10;
    for(var i = low; i < up; i *= 2) {
        var obj = new EachDigs(i);
        multwo.push(obj);
    }
   
    var number = new EachDigs(N);
    for(i in multwo) {
        if(multwo[i].equal(number)) {
            return true;
        }
    }
    return false;
};

function EachDigs(number) {
   this.digs = new Array();  
    for(var d = 0; d < 10; ++d) {
        this.digs[d] = 0; 
    }
    number = number.toString();
    for(i in number) {
        this.digs[parseInt(number[i])] += 1;
    }
    this.equal = equal;
}

function equal (obj) {
    for(i in this.digs) {
        if(this.digs[i] != obj.digs[i]) {
            return false;
        }
    }
    return true;
}