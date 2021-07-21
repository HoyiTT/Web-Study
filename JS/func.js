// 함수 작성

function showError(){
    alert('에러가 발생했습니다. 다시 시도해주세요.');
}

showError();

function sayHello(name){
    let msg = `Hello`;
    if(name){
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}

function sayHello2(name){
    let newName = name || 'frined';
    let msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello('Mike');
sayHello('Minji');
sayHello();