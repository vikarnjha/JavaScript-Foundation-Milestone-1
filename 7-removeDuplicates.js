function removeDuplicates(cart) {
    const uniqueCart = [];
    cart.forEach(item => {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item);
      }
    });
    return uniqueCart;
  }
  
  // Example usage:
  const cart = ["item1", "item2", "item1", "item3", "item2"];
  console.log(removeDuplicates(cart)); // ["item1", "item2", "item3"]
  