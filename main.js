

let inputElement = document.getElementById('text-input');

let buttonElement = document.getElementById("check-btn");

let result = document.getElementById('user_input');

function hasOnlyLetters(inputstring) {
    var pattern = /[^a-zA-Z]/;
    return !pattern.test(inputstring);
        
}




buttonElement.addEventListener("click", function () {
  let inputValue = inputElement.value;

  if (typeof inputValue === "undefined" || inputValue.trim() === "") {
    alert("Please input a value");
  } else {
    result.innerText = inputValue;

    // Remove non-alphanumeric characters and convert to lowercase
    let cleanValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned value is a palindrome
    let isPalindrome = cleanValue === cleanValue.split("").reverse().join("");

    if (isPalindrome) {
      result.innerText = `${inputValue} is a palindrome`;
    } else {
      result.innerText = `${inputValue} is not a palindrome`;
    }
  }
});


// Ako ima false w  моята проверка значи трябва да го

//You'll need to remove all non-alphanumeric characters (punctuation,
//spaces and symbols) and turn
//everything into the same case (lower or upper case) in order to check for palindromes.





 