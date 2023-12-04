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
        if (item.toString().includes("3")) {
            numArray[index] = "WON'T YOU BE MY NEIGHBOR?";
        } else if (item.toString().includes("2")) {
            numArray[index] = "BooP!";
        } else if (item.toString().includes("1")) {
            numArray[index] = "BeeP!";
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
    };
}

let isDarkMode = false;

function darkMode() {
    let body = document.querySelector("body");
    let darkElements = document.querySelectorAll("h1, h2, strong, img");
    let redResults = document.querySelector("span#showResults");

    if (!isDarkMode) {
        body.style.backgroundColor = "black";
        redResults.style.color = "red";
        for (let element of darkElements) {
            element.style.color = "grey";
        }
        document.querySelector("img").src = "img/MrRobogerBotInator.jfif";
        isDarkMode = true;
    } else {
        body.style.backgroundColor = "white";
        redResults.style.color = "black";
        for (let element of darkElements) {
            element.style.color = "black";
        }
        document.querySelector("img").src = "img/mr_robogerbot.png";
        isDarkMode = false;
    }

    window.onload = function () {
        formSubmission();
    }
};