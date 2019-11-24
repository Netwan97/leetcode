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