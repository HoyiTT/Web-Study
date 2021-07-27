function sayHello(){
    console.log('Hello');
}
//함수 선언문
/*
함수 선언문 : 어디서든 호출가능 -> 호이스팅
*/

let sayHello = function(){
    console.log('Hello');
}
//함수 표현식
/*
함수 표현식 : 코드에 도달하면 생성
*/

function showError() {
    console.log("error");
}
//화샇표 함수
let showError = () =>{
    console.log("error");
}

const add = (num1,num2) => num1 + num2 ;