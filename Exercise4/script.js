

const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output-paragraph");
let result;

let counter = 0;
button.addEventListener("click", function () {

  const inputValue = input.value;

  if (!inputValue.trim() || isNaN(inputValue)) {
    output.innerText = "Please enter a valid number";
  } else if (inputValue > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (inputValue < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else {
    recursion(inputValue);
  }
});

const recursion = (inputValue) => {
    
  let { result, result4, result3, result2 } = 0;
    let finalResult = ' ';
    console.log(result = Math.floor(inputValue / 1000))
    console.log(result2 = Math.floor(inputValue / 100 % 10))
    console.log((result3 = Math.floor((inputValue / 10) % 10)));
     console.log((result4 = Math.floor((inputValue / 1) % 10)));
    for (let i = 0; i < result; i++){
        finalResult += 'M'
    }
    for (let i = 0; i < result2; i++) {
        if(result2 == 4) {
            finalResult += "CD"
            i = result2;
        }else if(result2 == 5) {
            finalResult += 'D'
           i = result2;
        } 
            else if (result2 == 5) {
            finalResult += "D";
            i = result2;
            } else if (result2 == 6) {
            finalResult += "DC";
            i = result2;
            } else if (result2 == 7) {
            finalResult += "DCC";
            i = result2;
            } else if (result2 == 8) {
            finalResult += "DCCC";
            i = result2;
            } else if (result2 == 9) {
              finalResult += "CM";
              i = result2;
            } else {
              finalResult += "C";
            }
        
    }
    for (let i = 0; i < result3; i++){
        if (result3 == 4) {
            finalResult += 'XL'
            i=result3
        } else if (result3 == 5) {
            finalResult += 'L'
            i = result3;
        }else if (result3 == 6) {
            finalResult += 'LX'
            i = result3;
        }else if (result3 == 7) {
            finalResult += "LXX"
            i = result3;
        } else if (result3 == 8) {
            finalResult += "LXXX";
            i = result3;
        } else if (result3 == 9) {
            finalResult += "XC";
            i = result3;
        } else {
          finalResult += "X";
        }
    }
    for (let i = 0; i < result4; i++) {
      if (result4 == 4) {
        finalResult += "IV";
        i = result4;
      } else if (result4 == 5) {
        finalResult += "V";
        i = result4;
      } else if (result4 == 6) {
        finalResult += "VI";
        i = result4;
      } else if (result4 == 7) {
        finalResult += "VII";
        i = result4;
      } else if (result4 == 8) {
        finalResult += "VIII";
        i = result4;
      } else if (result4 == 9) {
        finalResult += "IX";
        i = result4;
      } else {
        finalResult += "I";
      }
    }
  output.textContent = finalResult;
  
};

