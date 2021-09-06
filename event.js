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

const HelloTest = document.querySelector('div.hello:first-child h1');
// toggle 사용
function handleClick() {
    HelloTest.classList.toggle('clicked')
    }

HelloTest.addEventListener('click', handleClick);
    // toggle은 h1의 classList에서 clicked class가 있는지 확인해서 존재하면 삭제하고 
    // 존재하지 않다면 classList에 clicked를 추가를 해준다

const HelloTest2 = document.querySelector('.hello2 h2');

function handleClick2() {
    HelloTest2.classList.toggle('check')
}

HelloTest2.addEventListener('click', handleClick2);
// className: 모든걸 교체함 이전에 class들은 상관하지않고 교체함
// classList: class들의 목록으로 작업할 수 있게끔 허용해줌 = 목록으로 작업을해서 그전에있던 class들을 그대로 냅두고 작동하게해줌
// ===: 서로 같은지 확인, =: 값을 변경해주는것
// toggle function: className 이 있는지 확인함

// 1. classList 사용(css, if, classNmae, classList 사용)
// function handleClick() {
//     const classClicked = 'clicked';
//     if(HelloTest.classList.contains(classClicked)){
//         HelloTest.classList.remove(classClicked)
//     } else{
//         HelloTest.classList.add(classClicked)
//     }
// }
// HelloTest.addEventListener('click', handleClick);


// const 절대 바뀌지않는 값 상수 (많은사람들이 기본적으로 사용) - 코드를봣을때 변수가 const인 경우 해당 변수의 함수들이 무얼의미하는지 알수있다(바뀌지않을값들 이라서) 
// let 바꿀수있는 값 (값을 업데이트 하고싶을때 씀) - 코드를봣을때 변수가 let 것들은 업데이트 가능성이 있는 코드
// var 과거에는 const와 let은 없고 오직 var만 존재했다 var도 let처럼 바꿀수있는값이다 - var은 규칙이 없어서 요즘은 사용 잘 안함