// 이벤트 와 if를 활용한 예제 
// const HelloTest = document.querySelector('.hello h1');

// function handleClick() {
//     const currentColor = HelloTest.style.color;
//     let newColor;
//     if(currentColor === 'blue'){
//         newColor = 'tomato'
//     } else {
//         newColor = 'blue'
//     }
//     HelloTest.style.color = newColor;
//     }
// HelloTest.addEventListener('click', handleClick);

const HelloTest = document.querySelector('.hello h1');
const HelloTest2 = document.querySelector('.hello h2');

// css 와 javascript 를 이용해 이벤트를 활용한예제 (css 와 js를 이용해서 코드를 더 짧고 깔끔하게 표현할수있다.)
function handleClick() {
    HelloTest.className = 'active';
}
HelloTest.addEventListener('click', handleClick);

function handleClick2() {
    HelloTest2.className = 'colorChange';
}
HelloTest2.addEventListener('click', handleClick2);
// const 절대 바뀌지않는 값 상수 (많은사람들이 기본적으로 사용) - 코드를봣을때 변수가 const인 경우 해당 변수의 함수들이 무얼의미하는지 알수있다(바뀌지않을값들 이라서) 
// let 바꿀수있는 값 (값을 업데이트 하고싶을때 씀) - 코드를봣을때 변수가 let 것들은 업데이트 가능성이 있는 코드
// var 과거에는 const와 let은 없고 오직 var만 존재했다 var도 let처럼 바꿀수있는값이다 - var은 규칙이 없어서 요즘은 사용 잘 안함