let total = 0;
let current = "";
let operator = null;
let expression = "";

let input = document.getElementById("input");
let button = document.getElementsByClassName("number");

let bac = button[0];
let bdel = button[1];
let bpercent = button[2];
let bdivide = button[3];
let b7 = button[4];
let b8 = button[5];
let b9 = button[6];
let bmultiply = button[7];
let b4 = button[8];
let b5 = button[9];
let b6 = button[10];
let bminus = button[11];
let b3 = button[12];
let b2 = button[13];
let b1 = button[14];
let bplus = button[15];
let b0 = button[16];
let b00 = button[17];
let bdot = button[18];
let equals = button[19];

function addNumber(btn) {
    btn.addEventListener("click", () => {
        current += btn.value;
        expression += btn.value;
        input.value = expression;
    });
}

addNumber(b0);
addNumber(b00);
addNumber(b1);
addNumber(b2);
addNumber(b3);
addNumber(b4);
addNumber(b5);
addNumber(b6);
addNumber(b7);
addNumber(b8);
addNumber(b9);
addNumber(bdot);

function setOperator(btn) {
    btn.addEventListener("click", () => {
        if (current === "") {
            operator = btn.value;
            expression = expression.slice(0, -1) + btn.value;
            input.value = expression;
            return;
        }
        let second = Number(current);
        if (operator === null) {
            total = second;
        } else if (operator === "+") {
            total = total + second;
        } else if (operator === "-") {
            total = total - second;
        } else if (operator === "*") {
            total = total * second;
        } else if (operator === "/") {
            total = total / second;
        } else if (operator === "%") {
            total = total % second;
        }
        operator = btn.value;
        expression += operator;
        current = "";
        input.value = expression;
    });
}

setOperator(bplus);
setOperator(bminus);
setOperator(bmultiply);
setOperator(bdivide);
setOperator(bpercent);

bac.addEventListener("click", () => {
    total = 0;
    current = "";
    operator = null;
    expression = "";
    input.value = "";
});

bdel.addEventListener("click", () => {
    current = current.slice(0, -1);
    expression = expression.slice(0, -1);
    input.value = expression;
});

equals.addEventListener("click", () => {

    let result = eval(expression);

    input.value = result;

    total = result;
    current = result.toString();
    expression = result.toString();
    operator = null;
});