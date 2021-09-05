const JsTest = document.querySelector('.jsTest');

function jsBoxTest() {
    JsTest.innerText = 'Awsome!!'
}
JsTest.addEventListener('mouseenter', jsBoxTest);

function jsBoxTest2(){
    JsTest.style.backgroundColor = 'blue';
}
JsTest.addEventListener('click', jsBoxTest2);

function jsBoxTest3(){
    JsTest.innerText = 'javaScript';
}
JsTest.addEventListener('mouseleave', jsBoxTest3);
// 절취선 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ // 

const h1 = document.querySelector('div.hello:first-child h1');

function eventTest() {
    h1.style.color = 'blue';
    console.log('awesome!')
}

function mouseEnter() {
    h1.innerText = 'mouse in'
    console.log('mouse is good')
}


function mouseLeave() {
    h1.innerText = 'mouse leave'
    console.log('mouse is leave')
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert('복사를 금지합니다.')
}

function handleWindowOffline() {
    alert('Please! Wifi!')
}

function handleWindowOnline() {
    alert('Awsowe!')
}

h1.addEventListener('click', eventTest) // click 클릭시 내가 설정한 이벤트발생
h1.addEventListener('mouseenter', mouseEnter) // mouseenter 마우스를 갖다대면 반응하는것
h1.addEventListener('mouseleave', mouseLeave); // mouseleave 마우스가 이벤트를 준 함수에 떠났을때 이벤트 발생
window.addEventListener('resize', handleWindowResize) // resize: 화면크기
window.addEventListener('copy', handleWindowCopy) // copy : 복사이벤트
window.addEventListener('offline', handleWindowOffline) // offline: 인터넷이 오프라인상태로 변경되면 내가 설정한 이벤트발생
window.addEventListener('online', handleWindowOnline) // online: 인터넷이 온라인상태로 변경되면 내가 설정한 이벤트발생
// const title = document.querySelector('div.hello:first-child h1');

// function handleTit() {
//     title.style.color = 'blue';
//     console.log('awesome!!')
// }

// title: 우리가지정한 const
// addEventListener 이벤트함수
// addEventListener('click': 클릭이벤트 , handleTit: function함수) : event를 넣으려할땐 function이 필요하다
// title.addEventListener('click' , handleTit);
// 자바스크립트에게 자동으로 클릭되게 하는것
// handleTit();

// console.dir : element 를 더 자세하게보여준다
// document.getElementById("") : html의 id태그를 자바스크립트로 호출하는방법
// title.innerText = 'Hello' : id태그인 title을 다른 텍스트로 바꾸는것

// getElementByid : id 호출
// getElementsByClassName : class 호출
// getElementsByTagName : 태그호출
// document.querySelector('.hello h1') : class안에 있는 태그를 가져올수있다(hello class의 h1태그) (같은태그가 존재할경우 가장 첫번째태그만 가져온다)
// 만약 querySelector을 통해서 같은태그를 모두 가져오고싶으면 querySelectorAll('') 을 하면된다
// 만약 querySelector을 통해서 id태그를 호출하고싶으면 querySelector('#') 을 해주면된다

// addEventListener : 이벤트 추가함수
// title.style.color = 'blue'; : 이런식으로 자바스크립트에서 스타일의 컬러를 바꿀수있다
// addEventListener → title.onclick = '펑션' : 이런식으로 나타낼수도있다