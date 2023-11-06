function capitalizeName(name) {
    return name[0].toLowerCase() === name[0] 
      ? name[0].toUpperCase() + name.slice(1)
      : name;
  }
  
  // Example usage:
  const name1 = "vikarn";
  const name2 = "Vikarn";
  
  console.log(capitalizeName(name1)); // "Vikarn"
  console.log(capitalizeName(name2)); // "Vikarn"
  