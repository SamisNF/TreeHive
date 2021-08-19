// multiples of the value entered into <input id="value1"> will return "Tree"
// multiples of the value entered into <input id="value2"> will return "Hive"
// multiples of both values entered in the inputs will return "Tree Hive"

// GLOBAL VARIABLES
let value1 = document.getElementById("value1").value;
let value2 = document.getElementById("value2").value;
let numberSet = [];

//CONTROL
function getValues(value1, value2) {
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if(Number.isInteger(value1) && Number.isInteger(value2) && value1 > 0 && value1 < 11 && value2 > 0 && value2 < 11) {

        numberSet = generateNumbers();

        displayOutput(numberSet);

    } else {
        alert("You must enter whole numbers from 1 to 10.");
    }
}

//view
function generateNumbers() {
    for (let index = 1; index <= 100; index++) {
        numberSet.push(index);
    }

    return numberSet;
}

//display
function displayOutput(numberSet, value1, value2) {

    let templateRows = "";

    for (let index = 0; index < numberSet.length; index++) {

        let number = numberSet[index];
        let className = "";

        if (number % value1 == 0 && number % value2 == 0) {
            number = "Tree Hive";
            className = "treeHive";
        } else if (number % value1 == 0) {
            number = "Tree";
            className = "tree";
        } else if (number % value2 == 0) {
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


