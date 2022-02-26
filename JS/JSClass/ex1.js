var user = {
    name : "ddandongne",
    age : 10,
    showInfo:function(){
        document.write("name= " + this.name+ ", age = "+this.age);
    }
}

user.showInfo();
/*
프로퍼티, 메서드 정의 방법
var 인스턴스 = {
    프로퍼티1:초깃값,
    프로퍼티2:초깃값,
    ....
    
    메서드1:function(){
    
    },
    메서드2:function(){
    
    }
}
*/
