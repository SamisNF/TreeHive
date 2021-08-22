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

        displayArray = generateNumbers(value1, value2);

        displayOutput(displayArray);

    } else {
        alert("You must enter whole numbers from 1 to 10.");
    }
}

//view
function generateNumbers(value1, value2) {
    
    let numberSet = [];
    
    for (let index = 1; index <= 100; index++) {
        numberSet.push(index);
    }

    //this variable will hold the generated content
    let displayArray= [];

    for (let index = 0; index < numberSet.length; index++) {

        let number = numberSet[index];

        if (number % value1 == 0 && number % value2 == 0) {
            displayArray.push("Tree Hive");
        } else if (number % value1 == 0) {
            displayArray.push("Tree");
        } else if (number % value2 == 0) {
            displayArray.push("Hive");
        } else {
            displayArray.push(number);
        }

    return displayArray;
    }
}

//loop over the array and create a tablerows with five columns each
function displayOutput(displayArray) {

    // this variable takes the contents of <tbody id="results"> from the page app.html 
    let tableBody = document.getElementById("results");

    // just in case there is some pre-existing content in <tbody id="results"> , we add this line.
    // The method .innerHTML replaces any child conent of <tbody id="results"> with an empty string.
    tableBody.innerHTML = "";

    //Retrieve the content of <template id="thTemplate"> and pass it to the variable templateRow.
    let templateRow = document.getElementById("thTemplate");

    for (index = 0; index < displayArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.contentEditable, true);

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = displayArray[index];
        rowCols[1].textContent = displayArray[index+1];
        rowCols[2].textContent = displayArray[index+2];
        rowCols[3].textContent = displayArray[index+3];
        rowCols[4].textContent = displayArray[index+4];

        tableBody.appendChild(tableRow);
    }

    document.getElementById("resultsDiv").classList.remove("invisible");
}



// this variable takes the contents of <tbody id="results"> from the page app.html 
//let tableBody = document.getElementById("results");

// just in case there is some pre-existing content in <tbody id="results"> , we add this line.
// this makes sure that tableBody is an empty string variable
//tableBody.innerHTML = "";

// this variable retrieves the template contents from <template id="thTemplate">
// let templateRow = document.getElementById("thTemplate");

//the method document.importNode() extracts the #document-fragment from templateRow.
//then the #document-fragment is passed to this variable.
//let tableRow = document.importNode(templateRow.contentEditable, true);

//this variable is an array of five indexed values, each one is an empty <td> tag.
//let rowCols = tableRow.querySelectorAll("td");