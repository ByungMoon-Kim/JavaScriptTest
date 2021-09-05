// sayHello(nameOfPerson) 이 부분이 const 역할을 해준다
function sayHello(nameOfPerson, age) {
    console.log('My name is ' + nameOfPerson + ' and I`m ' + age);
}
sayHello('nico', 10)
sayHello('dal', 25)
sayHello('lynn', 23)

// 계산기
function plus(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(2, 5);
plus(4, 10);
divide(90, 20)

function divide(a, b) {
    console.log(a / b);
}

const player = {
    name: "moon",
    sayHello: function (otherPersonName) {
        console.log('hello ' + otherPersonName + ' nice to meet you');
    }
};

player.sayHello('nico');

player.sayHello('moon');

// todayFood(FoodList, FoodList2, FoodList3)이부분이 const 역할을 해준다
function todayFood(FoodList, FoodList2, FoodList3) {
    console.log('today food shopping list ' + FoodList + 'and ' + FoodList2 + 'and ' + FoodList3);
}

todayFood('pizza ', 'sosege ', 'doritos');

function test2(Number1, Number2) {
    console.log(Number1 + Number2);
}
test2(85, 65)

// object 를 활용해 function 을 구현할수있다.
const Name = {
    name1: 'moon',
    name2: 'dain',
    func: function (everyLove) {
        console.log('Hello I love ' + everyLove + ' alweys Everyday')
    }
};
console.log(Name.name2);
Name.func('Dain');
Name.func('dain love ')

function funTest(Text, Text2){
    console.log('Today study ' + Text + ' and ' + Text2);
}
funTest('function', 'objectFunction');

const fun = {
    meen: 'fun1',
    fun_1: function(funcc){
        console.log(funcc)
    }
};
console.log(fun.meen);
fun.fun_1('Hello');



// const 절대 바뀌지않는 값 상수 (많은사람들이 기본적으로 사용) - 코드를봣을때 변수가 const인 경우 해당 변수의 함수들이 무얼의미하는지 알수있다(바뀌지않을값들 이라서) 
// let 바꿀수있는 값 (값을 업데이트 하고싶을때 씀) - 코드를봣을때 변수가 let 것들은 업데이트 가능성이 있는 코드
// var 과거에는 const와 let은 없고 오직 var만 존재했다 var도 let처럼 바꿀수있는값이다 - var은 규칙이 없어서 요즘은 사용 잘 안함
// undefind : 정의되지않음
// null : 존재하지않음 (비어있어요 를 의도적으로 표현)
// 함수.push : 추가하고싶은 항목을 array(배열)에 추가해준다
// array(배열): 설명이 필요하지않는 데이터, object: 설명이 필요한 정보가 담긴 데이터


// 정수는 .없이 []로 불러오고 문자는 .를 찍고 []없이 불러온다
// 예) 정수: console.log(playerList[1]);, 문자: console.log(playerList.blue);
// 추가할때에도 정수는 []를 이용한다 예) playerList[4] = 'love';

// function(펑션): 계속 반복해서 사용할 수 있는 코드조각, () 괄호가 실행코드
// conditional(조건문): true인지 false 인지 알려주기 때문에 중요하다