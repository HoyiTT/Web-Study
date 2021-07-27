function makeObject(name, age){
    return {
        name,
        // ==name : name,
        age : age,
        hobby : 'soccer'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);