function secondHighest(arr) {
    // Check if the array has less than 2 elements or all elements are the same
    if (arr.length < 2) return -Infinity;

    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    // If no second highest was found, return -Infinity
    return second === -Infinity ? -Infinity : second;
}

// Example usage:
console.log(secondHighest([5, 1, 2, 3, 4])); // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([])); // Output: -Infinity
console.log(secondHighest([1])); // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity
