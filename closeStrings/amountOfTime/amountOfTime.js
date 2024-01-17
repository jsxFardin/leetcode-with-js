let treeData = {
    val: 1,
    left: {
        val: 5,
        left: null,
        right: {
            val: 4,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
    },
    right: {
        val: 3,
        left: {
            val: 10,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
}

const amountOfTime = (root, start) => {
    let amount = 0;
    const traverse = (root, start) => {
        if (!root) {
            return 0;
        }

        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        if (root.val === start) {
            amount = Math.max(left, right);
            console.log('1 : ', amount);

            return -1;
        } else if (left >= 0 && right >= 0) {
            console.log('2 : ', amount);
            return Math.max(left, right) + 1;
        } else {
            amount = Math.max(amount, Math.abs(left - right));
            console.log('3 : ', amount);
            return Math.min(left, right) - 1;
        }
    }
    traverse(root, start);

    return amount;
}

// console.log(
amountOfTime(treeData, 3);