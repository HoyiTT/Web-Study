//다른 개방자가 만들어 놓은 객체

const user = {
    name : "Mike",
    age:30,
}

//내가 작업
// user.showName = function() {};

const showName = Symbol('show name');
user [showName] = function () {
    console.log(this.name);
};
/*심볼을 사용하면 Object.key , Object.values 와 같은 함수를 사용해도
값이 보이지 않음 -> 여러값을 추가하는 데 유용함
*/


//사용자가 접속하면 보는 메시지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`)
};