
const input = document.getElementById("user-input");
const output = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

check.addEventListener('click', function () {
    let inputValue = input.value;
    
    
    if (inputValue.trim() === '') {
        alert("Please provide a phone number");
        
    } else if (Uslovia(inputValue) === true) {
        output.textContent = `Valid US number:${inputValue}`
        
    } else {
        output.textContent = `Invalid US number:${inputValue}`
    }
    
    
})
///^1?\(\d{3}\)?-?\d{3}-?\d{4}$/
//^(1)?(\(\d{3}\))?\s*-\s*\d{3}\s*-\s*\d{4}$/

 function Uslovia(val) { 
    const regex =
      /^([1]? ?((\([0-9][0-9][0-9]\))|([0-9][0-9][0-9]))[-| ]?[0-9][0-9][0-9][ |-]?[0-9][0-9][0-9][0-9])$/;  
    return regex.test(val);
}
clear.addEventListener('click', function () {
    output.innerText = '';
})

