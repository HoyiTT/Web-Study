let fruit = prompt('무슨 과일을 사고 싶어요?');

switch(fruit){
    case '사과':
        console.log('100원입니다');
        break;
    case '배':
        console.log('200원입니다');
        break;
    case '자두':
        console.log('300원입니다');
        break;
    default:
        console.log('공짜!')
}