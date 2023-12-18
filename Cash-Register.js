function checkCashRegister(price, cash, cid) {
  const currencyUnits = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCashInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }
  // console.log(totalCashInDrawer);
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;
  console.log(totalCashInDrawer);
  if (totalCashInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCashInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyTotal = cid[i][1];
      let currencyValue = currencyUnits[currencyName];
      let currencyCount = Math.floor(currencyTotal / currencyValue);
      console.log(currencyCount);
      let amountToReturn = 0;

      while (changeDue >= currencyValue && currencyCount > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyTotal -= currencyValue;
        amountToReturn += currencyValue;
        currencyCount--;
      }

      if (amountToReturn > 0) {
        change.push([currencyName, amountToReturn]);
      }
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(result);
