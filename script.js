function displays(output) {
    document.getElementById("display_output").innerHTML = output;
}

let n = "";
let historyToggle = -1;
let bracketToggle = -1;

function clearResult() {
    n = "";
    bracketToggle = -1;
    return displays(n);
}
function clearLast() {
    n = n.slice(0, -1);
    return displays(n);
}
function calculate(value) {
    n = n.concat(value);
    return displays(n);
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

function result() {
    try {
        var ans = eval(n);
        addToHistory(n + ' = ' + ans);
        n = ans.toString();
        return displays(ans);
    } catch (error) {
        return displays("Error");
    }
}
function addToHistory(item) {
    var historyList = document.getElementById('historyList');
    var listItem = document.createElement('li');
    listItem.textContent = item;
    historyList.appendChild(listItem);
}
function showHistory() {
    bracketToggle = bracketToggle * (-1);
    if(bracketToggle > 0)
        document.getElementById('test').style.display = "unset";
    else if(bracketToggle < 0)
    document.getElementById('test').style.display = "none";
}
function addBracket() {
    bracketToggle = bracketToggle * (-1);
    if(bracketToggle > 0)
        n = n.concat("(");
    else if(bracketToggle < 0)
    n = n.concat(")");
    return displays(n);
}