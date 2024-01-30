function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let split_amount = 0;
  let total_bill = 0;
  for (let i = 0; i < bill.length; i++) {
    total_bill += bill[i];
  }
  split_amount = total_bill / 2;
  if (split_amount === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - split_amount);
  }
}
