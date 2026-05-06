function filterEvenNumbers(number: number[]): number[] {
    const result: number[] = [];
    for (let num of number) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));