function formInput() {
    const numIn = document.getElementById("numIn").value;
    document.querySelector("span#showResults").innerText = numIn;

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