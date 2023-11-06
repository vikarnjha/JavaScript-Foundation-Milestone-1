function calculateRentalCost(days, carType) {
    let rentalCost;
    switch (carType) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 10000;
        break;
      case 'luxury':
        rentalCost = 20000;
        break;
      default:
        rentalCost = 0;
        break;
    }
    const totalCost = rentalCost * days;
    return totalCost;
  }
  const days = 5;
  const carType = 'midsize';
  const totalCost = calculateRentalCost(days, carType);
  console.log(`The total rental cost for a ${carType} car for ${days} days is Rs. ${totalCost}/-.`); // Output: "The total rental cost for a midsize car for 5 days is Rs. 50000/-."
    