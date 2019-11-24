/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var col = [], row = [];
    ops.map(function(a) {
        row.push(a[0]);
        col.push(a[1]);
    });
    row.push(m);
    col.push(n);
    return row.sort((a,b) => a - b)[0] * col.sort((a,b) => a - b)[0];
};


/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var len = ops.length;
    if(len >= 1) {
        var row = ops[0][0];
        var col = ops[0][1];
        for(var i = 0; i < ops.length - 1; ++i) {
            var ops2 = ops[i + 1];
            if(ops2[0] < row) {
                row = ops2[0];
            }
            if(ops2[1] < col) {
                col = ops2[1];
            }
        }
    } else {
        return m * n;
    }
    return Math.min(row, m) * Math.min(col,n);
};