const MATHSCORE = prompt("수학몇점?");
const ENGSCORE = prompt("영어몇점?");
const RESULT = (Number(MATHSCORE) + Number(ENGSCORE)) / 2 ;


//Number(null) ->0
//Number(undefined) -> NaN

//Number(0) -> false
//Number('0') -> true

//Number('') -> false
//Number(' ') -> true
console.log(RESULT);

