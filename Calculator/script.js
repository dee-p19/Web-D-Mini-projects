let display = document.getElementById("display");

let expression = "";

function addNumber(num) {
    if (expression === "0") {
        expression = num;
    } else {
        expression += num;
    }
    display.innerText = expression;
}

function setOperator(op) {
    if (expression === "") return;
    expression += " " + op + " ";
    display.innerText = expression;
}

function clearAll() {
    expression = "";
    display.innerText = "0";
}

function calculate() {
    try {
        // × aur ÷ ko JS ke symbols me badalna
        let result = eval(
            expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
        );

        display.innerText = expression + " = " + result;
        expression = result.toString();
    } catch {
        display.innerText = "Error";
        expression = "";
    }
}

function toggleSign() {
    let parts = expression.split(" ");
    let last = parts.pop();

    if (!isNaN(last)) {
        last = (-Number(last)).toString();
        parts.push(last);
        expression = parts.join(" ");
        display.innerText = expression;
    }
}

function percentage() {
    let parts = expression.split(" ");
    let last = parts.pop();

    if (!isNaN(last)) {
        last = (Number(last) / 100).toString();
        parts.push(last);
        expression = parts.join(" ");
        display.innerText = expression;
    }
}