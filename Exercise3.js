/*
Write a program to compute the sum and product (multiplication) of an array of numbers.
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const numbers = [1, 2, 3, 4];

const sum = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum;
}

const product = (numbers) => {
    const product = numbers.reduce((acc, num) => acc * num);
    return product;
}

console.log(`Suma: ${sum(numbers)}, multiplicación: ${product(numbers)}`);