// array : 설명이 필요하지않는 데이터
const buyList = ['beer', 'pizza', 'coke', 'bagle', 'book'];
console.log(buyList);
buyList.push('spam');
console.log(buyList);

console.log(buyList[1]);
console.log(buyList[3]);

// object : 설명이 필요한 정보가 담긴 데이터
const playerColor = {
    red: 1,
    blue: 2,
    yellow: 3,
};
console.log(playerColor);
// 함수.추가하고싶은 이름; = 데이터에 새로 추가됨
playerColor.purple = 4;
console.log(playerColor);
// 함수.이름 = 해당함수의 이름을 불러온다
console.log(playerColor.red);

const playerList = {
    1: 'nice',
    2: 'moon',
    3: 'dain',
};
console.log(playerList);
// 정수는 .없이 []로 불러오고 문자는 .를 찍고 []없이 불러온다
// 예) 정수: console.log(playerList[1]);, 문자: console.log(playerList.blue);
console.log(playerList[1]);
playerList[4] = 'love';
console.log(playerList);


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

// function(펑션): 계속 반복해서 사용할 수 있느 코드조각
// document.getElementById("") : html의 id태그를 자바스크립트로 호출하는방법
