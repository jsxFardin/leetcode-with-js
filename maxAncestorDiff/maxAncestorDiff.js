let rootTree = {
    val: 8,
    left: {
        val: 3,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 6,
            left: {
                val: 4,
                left: null,
                right: null,
            },
            right: {
                val: 7,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 10,
        left: null,
        right: {
            val: 14,
            left: {
                val: 13,
                left: null,
                right: null,
            },
            right: null,
        },
    },
}

const maxAncestorDiff = (root) => {
    let result = 0;

    const traverse = (node, max, min) => {
        if (!node) {
            return 0;
        }
        let diff = Math.max(Math.abs(node.val - max), Math.abs(node.val - min));
        result = Math.max(diff, result);

        traverse(node.left, Math.max(node.val, max), Math.min(node.val, min))
        traverse(node.right, Math.max(node.val, max), Math.min(node.val, min))
    }

    traverse(root, root.val, root.val)

    return result;
};

console.log(maxAncestorDiff(rootTree));