$(document).ready(function(){
  let num1 = '';
  let num2 = '';
  let operator = '';
  let total = '';

  function handleNum(num) {
    if (num1 === '') {
      num1 = num;
      console.log('you entered a number')
    } else {
      num2 = num;
      console.log('you entered a number')
    }
    displayButton(num);
  }

  function handleOperator(oper) {
    if (operator === '') {operator = oper;
    console.log('you entered an operator')
  } else {
    handleTotal();
    operator = oper;
  }

  }

  function handleTotal() {
    switch (operator) {
      case '+':
          total = +num1 + +num2;
          displayButton(total);
          break;
      case "-":
          total = +num1 - +num2;
          displayButton(total);
          break;
      case "x":
          total = +num1 * +num2;
          displayButton(total);
          break;
      case "÷":
          total = +num1 / +num2;
          displayButton(total);
          break;
      case "Clear":
          total = '';
          displayButton(total);
    }
  }

  function displayButton(btn) {
    $('.calcOutput').text(btn);
  }

  $('.calcBtn').on('click', function(e) {
    let btn = e.target.innerHTML;
    if (btn >= '0' && btn <= '9') {
      handleNum(btn);
    } else {
      handleOperator(btn);
    };
  });
});
