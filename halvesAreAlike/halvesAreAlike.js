/* 
* https://leetcode.com/problems/determine-if-string-halves-are-alike/?envType=daily-question&envId=2024-01-12
 */

const halvesAreAlike = function (s) {
    const half = s.length / 2;
    const a = s.slice(0, half);
    const b = s.slice(half);

    const aCount = coutVowels(a);
    const bCount = coutVowels(b);

    return aCount === bCount;
};

const coutVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) count++;
    }
    return count;
}


let string = 'textbook';
console.log(halvesAreAlike(string));
