/* method : 객체 프로퍼티로 할당 된 함수*/

let boy = {
    name : 'Mike',
    showName : function() {
        console.log(this.name);
    }
};

let man = boy;

boy = null;

man.showName(); //