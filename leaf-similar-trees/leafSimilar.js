let root1 = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null,
            },
            right: {
                val: 4,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 1,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 8,
            left: null,
            right: null,
        },
    },
}

let root2 = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
    right: {
        val: 1,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 2,
            left: {
                val: 9,
                left: null,
                right: null,
            },
            right: {
                val: 8,
                left: null,
                right: null,
            },
        },
    },
}

const leafSimilar = (root1, root2) => {
    const rootOneHeadNodes = getHeadNodes(root1);
    const rootTowHeadNodes = getHeadNodes(root2);
    return arraysEqual(rootOneHeadNodes, rootTowHeadNodes);
};

const getHeadNodes = (root, arr = []) => {
    let output = arr;

    if ((root.left == null || root.left == undefined) && (root.right == null || root.right == undefined)) {
        output.push(root.val);
    }

    if (root.left) {
        getHeadNodes(root.left, output);
    }
    if (root.right) {
        getHeadNodes(root.right, output);
    }
    return output;
};

const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};


console.log(leafSimilar(root1, root2));