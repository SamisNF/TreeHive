// multiples of the value entered into <input id="value1"> will return "Tree"
// multiples of the value entered into <input id="value2"> will return "Hive"
// multiples of both values entered in the inputs will return "Tree Hive"

let numberSet = [];

//control
function getValues() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if(Number.isInteger(value1) && Number.isInteger(value2)) {

        numberSet = generateNumbers(value1, value2);

        displayOutput(numberSet);

    } else {
        alert("You must enter integers.");
    }
}

//view
function generateNumbers(value1, value2) {
    for (let index = value1; index <= value2; index++) {
        numberSet.push(index);
    }

    return numberSet;
}

//display
function displayOutput(numberSet) {

    let templateRows = "";

    for (let index = 0; index < numberSet.length; index++) {

        let number = numberSet[index];
        let className = "";

        if (number % 3 == 0 && number % 5 == 0) {
            number = "Tree Hive";
            className = "treeHive";
        } else if (number % 3 == 0) {
            number = "Tree";
            className = "tree";
        } else if (number % 5 == 0) {
            number = "Hive";
            className = "hive";
        } else {
            className = "justNumber";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`

        document.getElementById("results").innerHTML = templateRows;
    }

    document.getElementById("resultsDiv").classList.remove("invisible");
}


