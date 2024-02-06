let price = 19.0;
let cid = [
  ["PENNY", 1],
  ["NICKEL", 2],
  ["DIME", 2],
  ["QUARTER", 2],
  ["ONE", 1],
  ["FIVE", 10],
  ["TEN", 60],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

function SortArray(arr) {
  const reversedarray = [...arr].reverse();
  return reversedarray;
}

function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][1];
  }
  return sum;
}

const input = document.getElementById("cash");
const button = document.getElementById("purchase-btn");
const change = document.getElementById("change-due");

button.addEventListener("click", () => {
  let inputValue = Number(input.value);
  let reversedArr = Number(checkArray(cid)).toFixed(2);
  let changeValue = inputValue - price;
  let formattedString = "";
  let change2 = changeValue;
  let arr2 = SortArray(cid);

  if (price > inputValue) {
    alert("Customer does not have enough money to purchase the item");
  } else if (inputValue === price) {
    change.textContent = `No change due - customer paid with exact cash`;
  } else if (changeValue > reversedArr) {
    change.textContent = `Status: INSUFFICIENT_FUNDS`;
  } else {
    denominateChange(changeValue, arr2);

    if (change2 > 0) {
      change.textContent = `Status: INSUFFICIENT_FUNDS`;
    } else if (reversedArr > changeValue) {
      change.textContent = `Status: OPEN ${formattedString}`;
    } else {
      change.textContent = `Status: CLOSED ${formattedString}`;
    }
  }
  function denominateChange(change, arr) {
    let result2 = 0;
    arr.forEach((denomination) => {
      if (denomination[1] > 0) {
        result2 = 0;
        if (denomination[0] == "ONE HUNDRED") {
          result2 = Math.floor(change2 / 100);
          if (result2 * 100 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 100).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 100} `;
          }
        } else if (denomination[0] == "TWENTY") {
          result2 = Math.floor(change2 / 20);

          if (result2 * 20 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 20).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 20} `;
          }
        } else if (denomination[0] == "TEN") {
          result2 = Math.floor(change2 / 10);

          if (result2 * 10 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 10).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 10} `;
          }
        } else if (denomination[0] == "FIVE") {
          result2 = Math.floor(change2 / 5);

          if (result2 * 5 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 5).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 5} `;
          }
        } else if (denomination[0] == "ONE") {
          result2 = Math.floor(change2 / 1);

          if (result2 * 1 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 1).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 1} `;
          }
        } else if (denomination[0] == "QUARTER") {
          result2 = Math.floor(change2 / 0.25);

          if (result2 * 0.25 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 0.25).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 0.25} `;
          }
        } else if (denomination[0] == "DIME") {
          result2 = Math.floor(change2 / 0.1);

          if (result2 * 0.1 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 0.1).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 0.1} `;
          }
        } else if (denomination[0] == "NICKEL") {
          result2 = Math.floor(change2 / 0.05);

          if (result2 * 0.05 >= denomination[1]) {
            change2 = (change2 - denomination[1]).toFixed(2);
            formattedString += `${denomination[0]}: $${denomination[1]} `;
          } else if (result2 > 0) {
            change2 = (change2 - result2 * 0.05).toFixed(2);
            formattedString += `${denomination[0]}: $${result2 * 0.05} `;
          }
        } else if (denomination[0] == "PENNY") {
          result2 = Math.floor(change2 / 0.01);
        }

        if (result2 * 0.01 >= denomination[1]) {
          change2 = (change2 - denomination[1]).toFixed(2);
          formattedString += `${denomination[0]}: $${denomination[1]} `;
        } else if (result2 > 0) {
          change2 = (change2 - result2 * 0.01).toFixed(2);
          formattedString += `${denomination[0]}: $${result2 * 0.01} `;
        }
      }
    });
  }
});

//  const denominations = [
//    { name: "ONE HUNDRED: ", value: 100 },
//    { name: "TWENTY: ", value: 20 },
//    { name: "TEN: ", value: 10 },
//    { name: "FIVE: ", value: 5 },
//    { name: "ONE: ", value: 1 },
//    { name: "QUARTER: ", value: 0.25 },
//    { name: "DIME: ", value: 0.1 },
//    { name: "NICKEL: ", value: 0.05 },
//    { name: "PENNY: ", value: 0.01 },
// ];

// function calculateChange(change, denomination) {
//   let result = 0;
//   result = (change - denomination).toFixed(2);
//   return result;
// }

// denominations.forEach((denomination) => {
//   const count = Math.floor(change / denomination.value);
//   if (count > 0) {
//     result.denominations[denomination.name] = count;
//     change -= count * denomination.value;
//     change = Math.round(change * 100) / 100;
//   }
// });

//как може да бъде завъртян този if else statement w един for each iteration, който да
// да сравнява стойностите от елемента който е в момента със масива който съдържа в момента тези стойности
// например  denominations.forEach((denomination) => denomination[0] == arr[i][0]{
// result2 == 0;
// result * denomination object =
