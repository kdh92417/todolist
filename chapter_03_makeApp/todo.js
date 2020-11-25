// 3-5 Making a To Do List part One

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

/*
JSON.stringify 는 자바스크립트 object를 string으로 바꿔준다.
*/

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = "";
}

// foreach : 담겨져 있는 것들에 대해서 각각 하나씩 실행시킴



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos) // 자바스크립트 오브젝트로 변환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        });
    }
}

// 
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
