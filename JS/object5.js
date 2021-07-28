const user = {
    name : 'Mike',
    age : 30,
};

const user2 = Object.assign({}, user);
user2.name = "Tom"
;
console.log(user);
console.log(user2);