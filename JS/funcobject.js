// 생성자 함수 : 상품 객체 생성

function Item (title, price) {
    //this = {}
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }
    
    
}

const item1 = new Item('인형' , 3000);
const item2 = new Item('가방' , 4000);
const item3 = new Item('지갑' , 5000);

console.log(item1, item3, item3);

item3.showPrice();