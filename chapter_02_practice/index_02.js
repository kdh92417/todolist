// 2-6 DOM if else Function practice

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#ff7675";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR
    } else {
        title.style.color = BASE_COLOR
    }
}

// click : 클릭할떄
// mouseenter : 마우스가 해당영역 안에 들어갈 때
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick)
}

init();
*/


// ===================================
// 2-7 DOM if else Function practice part Two
// CSS는 CSS에서 처리하고, JS에서는 JS만 처리하게

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//     //const currentClass = title.className;
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     // ! : 있지 않음을 뜻함
//     if (!hasClass) {    
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }


// toggle : 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다.
function handleClick() {
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    title.addEventListener("click", handleClick)
}

init()