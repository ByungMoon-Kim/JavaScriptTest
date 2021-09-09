const loginInput = document.querySelector('.form input');
const loginButton = document.querySelector('.form button');

function ClickButton() {
    const username = loginInput.value;
    console.log(username);
}
loginButton.addEventListener('click', ClickButton);


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