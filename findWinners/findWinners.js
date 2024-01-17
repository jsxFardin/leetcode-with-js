/* 
* https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
*/
const data = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]];

const findWinners = function (matches) {
    let lmap = new Map();
    let wmap = new Map();
    let an1 = [],
        an2 = [];

    for (let [w, l] of matches) {
        wmap.set(w, (wmap.get(w) || 0) + 1);
        lmap.set(l, (lmap.get(l) || 0) + 1);
    }

    for (let [l, count] of lmap) {
        wmap.delete(l);
        if (count === 1) an2.push(l);
    }

    for (let [w, count] of wmap) an1.push(w);

    return [
        an1.sort((a, b) => a - b),
        an2.sort((a, b) => a - b)
    ];

};

console.log(findWinners(data));