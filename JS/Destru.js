let users = ['Mike', 'Tom', 'Jane'];

let [user1, user2, user3] = users;

/*
==
let user1 = users[0];
let user2 = users[1];
let user3 = users[2];

*/

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split('-');


let user = {name : 'Mike', age:30};
let{name, age} = user;

console.log(name); //'Mike'
consloe.log(age);  // 30
