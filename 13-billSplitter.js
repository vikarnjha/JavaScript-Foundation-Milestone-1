function calculateBill(dishCost, numberOfPeople) {
    const perPersonCost = dishCost / numberOfPeople;
    return perPersonCost;
  }
  const dishCost = 1000;
  const numberOfPeople = 4;
 
  console.log(`The total bill for the table is Rs. ${dishCost}/- and each person should pay Rs. ${calculateBill(dishCost, numberOfPeople)}/-.`); // Output: The total bill for the table is Rs. 1000/- and each person should pay Rs. 250/-
    