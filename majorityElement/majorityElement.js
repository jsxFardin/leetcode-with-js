let nums = [1, 1, 1, 2, 2, 3, 3, 3]

const majorityElement = (numbers) => {
    let numbersCount = new Map();

    for (let num of numbers) {
        if (numbersCount.has(num)) {
            value = numbersCount.get(num)
            numbersCount.set(num, value + 1)
        }
        else {
            numbersCount.set(num, 1)
        }
    }

    let max = [...numbersCount.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

    return max[0];
}

console.log(majorityElement(nums));