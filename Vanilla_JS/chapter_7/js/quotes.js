const quotes = [
    { quote: "여러분이 할 수 있는 가장 큰 모험은 바로 여러분이 꿈꿔오던 삶을 사는 것입니다.",
     author: "??",
    },
    { quote: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
     author: "조쉬 빌링스",
    },
    { quote: "세상이 좋아하라고 하는 것을 그대로 받아들이기 보다 네가 무엇을 좋아하는지 아는 것이 네 영혼을 살아있게 한다.",
     author: "??",
    },
    { quote: "기회가 왔을 때 일을 하라. 내 일생에는 한꺼번에 수많은 아이디어가 떠오르고 호기가 오랫동안 계속되던 시기가 몇 번 있었다. 만일 내가 다음 주에 좋은 아이디어가 떠오르면, 나는 뭔가라도 할 것이다. 하지만 그렇지 않다면, 나는 아무것도 하지 않을 것이다.",
     author: "??",
    },
    { quote: "어린 시절 우리는 어른이 되면 더 이상 나약하지 않을 거라 생각했다. 하지만 어른이 된다는 것은 나약함을 받아들이는 것이다. 살아있다는 것은 나약하다는 것이다.",
     author: "??",
    },
    { quote: "모든것을 용서받은 젊음은 스스로 아무것도 용서하지 않는다. 스스로 모든 것을 용서하는 노년기는 아무것도 용서받지 못한다.",
     author: "??",
    },
    { quote: "우리는 항상 젊음을 위해 미래를 개발할 수는 없지만, 미래를 위해 우리의 젊음을 개발할 수는 있다.",
     author: "??",
    },
    { quote: "우리 모두는 초대장도 없이, 비자발적으로 지구에 온 방문객이다. 하지만 나에겐 이 비밀조차 감탄스러울 따름이다.",
     author: "??",
    },
    { quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
     author: "??",
    },  
    { quote: "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.",
     author: "조지 S. 패튼",
    },  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//console.log(todaysQuote.quote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;