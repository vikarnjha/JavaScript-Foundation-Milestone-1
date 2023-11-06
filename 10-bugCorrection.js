function fixCart(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  const cart = [2, 4, 1, 3, 5];
  const fixedCart = fixCart(cart);
  console.log(fixedCart); // Output: [4, 8, 2, 6, 10]
    