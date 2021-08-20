// multiples of the value entered into <input id="value1"> will return "Tree"
// multiples of the value entered into <input id="value2"> will return "Hive"
// multiples of both values entered in the inputs will return "Tree Hive"

//CONTROL
function getValues() {
    
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if(Number.isInteger(value1) && Number.isInteger(value2) && value1 > 0 && value1 < 11 && value2 > 0 && value2 < 11) {

        let numberSet = [];
        numberSet = generateNumbers(numberSet);

        displayOutput(numberSet, value1, value2);

    } else {
        alert("You must enter whole numbers from 1 to 10.");
    }
}

//view
function generateNumbers(numberSet) {
    for (let index = 1; index <= 100; index++) {
        numberSet.push(index);
    }

    return numberSet;
}

//display
function displayOutput(numberSet, value1, value2) {

    //put template contents in a variable templateRows
    let templateRows = document.getElementById("thTemplate");

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



// this variable takes the contents of <tbody id="results"> from the page app.html 
let tableBody = document.getElementById("results");
// just in case there is some pre-existing content in <tbody id="results"> , we add this line.
tableBody.innerHTML = "";
// this makes sure that tableBody is an empty string variable

// this variable retrieves the template contents from <template id="thTemplate">
let templateRow = document.getElementById("thTemplate");

//the method document.importNode() extracts the #document-fragment from templateRow.
//then the #document-fragment is passed to this variable.
let tableRow = document.importNode(templateRow.contentEditable, true);

//this variable is an array of five indexed values, each one is an empty <td> tag.
let rowCols = tableRow.querySelectorAll("td");






