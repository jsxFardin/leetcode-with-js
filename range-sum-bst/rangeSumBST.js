let treeData = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
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
        val: 15,
        left: null,
        right: {
            val: 18,
            left: null,
            right: null,
        },
    },
}


const rangeSumBST = (root, low, high) => {
    if (root == null)
        return 0;
    return ((root.val >= low && root.val <= high ? root.val : 0) + rangeSumBST(root.left, low, high) +
        rangeSumBST(root.right, low, high));
}

console.log(rangeSumBST(treeData, 7, 15));