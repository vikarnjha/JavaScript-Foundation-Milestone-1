function findHighestMark(marks) {
    let highestMark = 0;
  
    for (let i = 0; i < marks.length; i++) {
      if (marks[i] > highestMark) {
        highestMark = marks[i];
      }
    }
  
    console.log(`The highest mark is ${highestMark}`);
  }
  
  // Example usage
  let marks = [80, 65, 90, 75, 85];
  findHighestMark(marks); // Output:  The highest mark is 90
  