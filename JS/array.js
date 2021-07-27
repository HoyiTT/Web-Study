//array

let days = ['man', 'tue', 'wed'];

days.push('thu');
days.unshift('sun');

console.log(days);

for (let index = 0; index<days.length; index++){
    console.log(days[index]);
}

for (let x of days){
    console.log(x);
}