const display = document.getElementById("display");

function appendValue(value){

    display.value += value;
}

function clearDisplay(){

    display.value = "";
}

function deleteLast(){

    display.value =
    display.value.slice(0,-1);
}

function calculate(){

    try{

        display.value =
        eval(display.value);

    }

    catch{

        display.value = "Error";
    }
}

let historyList = [];

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        historyList.push(expression + " = " + result);

        display.value = result;
    }
    catch {
        display.value = "Error";
    }
}

function showHistory() {
    if (historyList.length === 0) {
        alert("No History Yet");
        return;
    }

    alert(historyList.join("\n"));
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}