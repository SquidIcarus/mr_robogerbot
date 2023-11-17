// Business Logic



function createNumArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
        numArray.push(i);
    }
    return numArray;
}

function formInput() {
    const numIn = parseInt(document.getElementById("numIn").value);
    const numArray = createNumArray(numIn);
    document.querySelector("span#showResults").innerText = numArray;
}

// UI Logic
function formSubmission() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        formInput();
        document.getElementById("results").removeAttribute("class");
    }
};

window.onload = function () {
    formSubmission();
}