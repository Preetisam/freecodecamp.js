function checkCashRegister(price, cash, cid) {
  // define the value of each currency unit
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  // calculate the total cash in the drawer
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = Math.round(totalCid * 100) / 100; // round to two decimal places
  
  // calculate the change due
  let changeDue = cash - price;
  
  // handle insufficient funds or exact change cases
  if (totalCid < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (totalCid === changeDue) {
    return {status: "CLOSED", change: cid};
  }
  
  // calculate the change to return
  const change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const currency = cid[i][0];
    const currencyValue = currencyValues[currency];
    let currencyAmount = cid[i][1];
    let currencyCount = 0;
    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100; // round to two decimal places
      currencyAmount -= currencyValue;
      currencyCount += currencyValue;
    }
    if (currencyCount > 0) {
      change.push([currency, currencyCount]);
    }
  }
  
  // handle cases where exact change cannot be given
  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  // return the change
  return {status: "OPEN", change: change};
}
