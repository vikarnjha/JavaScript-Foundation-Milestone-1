const customer = {
  name: "Vikarn Jha",
  balance: 10000,
};

const deposit = (customer, amount) => {
  customer.balance += amount;
  console.log(
    `Deposit of ${amount} successful. New balance is ${customer.balance}.`
  );
};

const withdraw = (customer, amount) => {
  if (amount > customer.balance) {
    console.log("Insufficient funds.");
  } else {
    customer.balance -= amount;
    console.log(
      `Withdrawal of ${amount} successful. New balance is ${customer.balance}.`
    );
  }
};
console.log(customer.balance); 

deposit(customer, 5000);
console.log(customer.balance); 

withdraw(customer, 20000);
console.log(customer.balance); 

withdraw(customer, 10000); 
console.log(customer.balance); 
