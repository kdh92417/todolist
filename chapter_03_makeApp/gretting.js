// 3-3 Saving the User Name part One
// Local Storage

/*
from chrome console
localStorage.setItem("adam", true)
=> 새로고침해도 localStorage에서 지워지지 않음

localStorage.getItem("adam")
=> "true"

뭔가를 저장하고 있다.
*/

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName() {
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        // user is not 
        askForName();
    } else {
        // user is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();

// 3-4 Saving the User Name part Two
// prevent, Local