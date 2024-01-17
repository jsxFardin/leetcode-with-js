/* 
* https://leetcode.com/problems/unique-number-of-occurrences/description/
*/
let arrData = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

const uniqueOccurrences = (arr) => {
    let arrMap = new Map();

    for (let num of arr) {
        arrMap.set(num, (arrMap.get(num) ?? 0) + 1);
    }
    const uniqueValues = new Set(arrMap.values());

    return arrMap.size === uniqueValues.size;
};

console.log(uniqueOccurrences(arrData));