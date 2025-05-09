function secondHighest(arr) {
    // If array has less than 2 elements, immediately return -Infinity
    if (arr.length < 2) return -Infinity;

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? -Infinity : second;
}

// Example test cases
console.log(secondHighest([5, 1, 2, 3, 4]));      // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([]));                  // -Infinity
console.log(secondHighest([1]));                 // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));      // -Infinity
