const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 === 0) {
    continue; // Skip even numbers
  }
  if (number % 3 === 0) {
    console.log(number);
  }
}
