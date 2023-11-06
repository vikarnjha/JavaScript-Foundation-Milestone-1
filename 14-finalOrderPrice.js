const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
  };
  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 2, quantity: 10 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); // Output: 55
    