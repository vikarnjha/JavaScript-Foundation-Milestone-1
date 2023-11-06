function mixColors(color1, color2) {
  let result;

  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          result = "purple";
          break;
        case "yellow":
          result = "orange";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          result = "purple";
          break;
        case "yellow":
          result = "green";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          result = "orange";
          break;
        case "blue":
          result = "green";
          break;
        default:
          result = "Invalid color combination";
          break;
      }
      break;
    default:
      result = "Invalid color combination";
      break;
  }

  console.log(`The result of mixing ${color1} and ${color2} is ${result}`);
}

// Example usage
mixColors("red", "blue"); // Output: The result of mixing red and blue is purple
mixColors("red", "yellow"); // Output: The result of mixing red and yellow is orange
mixColors("blue", "yellow"); // Output: The result of mixing blue and yellow is green
mixColors("purple", "green"); // Output: The result of mixing purple and green is Invalid color combination