document.addEventListener("DOMContentLoaded", function () {
    let inputList = [];
  
    while (true) {
      const inputText = prompt("Enter an integer (negative integer to quit):");
      const inputNumber = parseInt(inputText);
  
      if (!isNaN(inputNumber) && inputNumber > 0) {
        inputList.push(inputNumber);
      } else if (inputNumber < 0) {
        displayStats(inputList);
        break; 
      }
    }
  });
  
  function displayStats(list) {
    const average = list.length > 0 ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;
  
    const statsMessage = `for the list ${list.join(", ")}, the average is ${average},the minimum is ${min}, and the maximum is ${max}`;
    alert(statsMessage);
  }
displayStats()