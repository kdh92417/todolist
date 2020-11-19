// 2-1 Your first JS Function
const Adam = {
    name : 'Adam',
    age : 29,
    gender : 'male'
};

/*
console.log(console)
console은 객체이며 log는 console 객체의 키값이다.
*/

// 함수는 인자(argument)를 받는다. 
// function sayHello(name, age){
//     console.log('Hello' + ' Your name is ' + name, 'and Your age is', age);    // == console.log('Hello', name); 
// }

function sayHello(name, age){
    // console.log(`Hello ${name} you are ${age} years old`)
    return `Hello ${name} you are ${age} years old`;
};

const greetAdam = sayHello('Adam', 29)

console.log(greetAdam)

// calculator 기능 구현하기
const calculator = {
    plus : function(a, b){
        return a + b;
    },

    squareRoot : function(a, b){
        return a ** b;
    }
}

console.log(calculator.plus(3, 5))
console.log(calculator.squareRoot(2,4))


// ===========================
// 2- 2 ~ 3 JS DOM Function and Modifying the DOM with JS
// DOM(Document Object Module)
// css처럼 선택할 수 있다.
// querySelector : 다큐먼트 노드의 첫번째 자식을 반환한다.
const title = document.querySelector("#title");
console.log(title);
console.error("Fuck");
title.innerHTML = "Hi Adam"

console.log(title)
console.dir(title)

title.style.color = "blue";
document.title = "I'm Adam"



// ===================================
// 2-4 Events and event handlers
// 자바스크립트는 모든 HTML 과 CSS를 조작하기 위해 만들지 않았다.
// 자바스크립트는 이벤트에 반응하기 위해서 만들어졌다.
// 여기서 이벤트란 웹사이트에서 발생하는 것들을 말한다.

function handleResize(event){
    console.log(event)
}

window.addEventListener("resize", handleResize) // handleResize() 해버리면 바로호출함

function handleClick(){
    if (title.style.color == "black") {
        title.style.color = "Blue"
    }
    else {
        title.style.color = "black"
    }
    
}

title.addEventListener("click", handleClick)

