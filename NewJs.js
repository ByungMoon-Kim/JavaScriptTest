const loginForm = document.querySelector('.form');
const loginInput = document.querySelector('.form input');

const link = document.querySelector('a');
    
function onButtonSubmit(tomato) {
    tomato.preventDefault(); // preventDefault: 어떤 event의 기본 행동, 발생이 되지않도록 막는다(ex: 새로고침)
    console.log(loginInput.value);
}

function handleClickLink(event){
    event.preventDefault()
    alert('clicked!')
    console.dir(event)
}

// event submit: 엔터를 누르거나 버튼을 클릭 할 떄 이벤트 발생
loginForm.addEventListener('submit', onButtonSubmit);
link.addEventListener('click', handleClickLink);

// querySelector 로 id태그를 쓸때는 #를 써야한다 하지만 getElementById 로 id태그를 쓸땐 #를 안써도된다
// console.dir() 불러온 함수의 내부(엘리먼트)를 자세하게 보여준다

// console.log(loginInput.value); // 버튼을 눌렀을때 input(텍스트박스) 통해서 입력한것들이 출력된다
// length 문자의 길이를 구해주는것



/**
function ClickButton() {
    const username = loginInput.value;
    if(username === ""){
        console.log(username)
    } else if(username.length > 15 ) { // 글자가 15이상 넘어가면 경고문이 뜬다
        alert("Your name is too long.")
    } else if(username.length < 5 ) { // 글자가 5이하면 경고문이 뜬다
        alert("Your name is too small")
    }
}
loginButton.addEventListener('click', ClickButton);
 */