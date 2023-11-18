// Business Logic

function createNumArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
        numArray.push(i);
    }
    return numArray;
}

function glitchArray(numArray) {
    numArray.forEach((item, index) => {
        if (item.toString().includes("1")) {
            numArray[index] = "BEEP!";
        }
    });
    return numArray;
}

// UI Logic
function formInput() {
    const numIn = parseInt(document.getElementById("numIn").value);
    const numArray = createNumArray(numIn);
    const beepElement = glitchArray(numArray);
    document.querySelector("span#showResults").innerText = beepElement;
}

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