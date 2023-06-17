let inputElement = document.getElementById('input-element');
let number1, number2;

inputElement.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter' || ev.keyCode === 13) {
        let tempValue = inputElement.value;
        if (!isNaN(tempValue)) {
            if (number1 === undefined) {
                number1 = parseInt(tempValue);
                document.getElementById('number1').textContent = number1;
                inputElement.value = 0;
            } else if (number2 === undefined) {
                number2 = parseInt(tempValue);
                document.getElementById('number2').textContent = number2;
                inputElement.value = 0;
            } else {
                alert("Please Insert Again");
                number1 = undefined;
                number2 = undefined;
                document.getElementById('number1').textContent = '?';
                document.getElementById('number2').textContent = '?';

            }

        }
    }
});

const execute = (operator) => {
    if (!number1 && !number2) {
        alert("Please Enter The Numbers");
        return;
    }
    switch (operator) {
        case '+':
            operate((number1 + number2), operator);
            break;
        case '-':
            operate((number1 - number2), operator);
            break;
        case '*':
            operate((number1 * number2), operator);
            break;
        case '/':
            operate((number1 / number2), operator);
            break;
        case '%':
            operate((number1 % number2), operator);
            break;

    }
}

const operate = (result, operator) => {
    document.getElementById('answer').textContent = result;
    document.getElementById('operator').textContent = operator;
}
