
let round_up=3

// the apppend value function takes a value pararamter and appends its content to the existig content of the element with id
// output
function append_value(value) {
    document.getElementById('output').value += value;
  }
  
  // This functions called clear_output operates by just setting whatever is in the output element to an empty string 
  function clear_output() {
    document.getElementById('output').value = '';
  }
  
  // This funtion creates a variable called output and store the character that is the 
  // the element with id output and converts it to value , then parse it as a float before 
  // rounding off the float to the number of places assigned to the round_up variable.
  function calculate() {
    var output = eval(document.getElementById('output').value);
    document.getElementById('output').value = parseFloat(output.toFixed(round_up));
  }

  // Create a function that gets the output and converts it to value and then slice 
  // an then slice the output from the end and store the remainder in the output
  function delete_last_character() {
    var current_value = document.getElementById('output').value;
    document.getElementById('output').value = current_value.slice(0, -1);
  }
  
  function show_alert() {
    alert(" Are you sure what you have input is correct?");
  }
