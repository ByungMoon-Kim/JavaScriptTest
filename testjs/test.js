const join = document.querySelector('.user_join');

function EventJoin() {
    alert('Test')
}

// 버튼을 이용한 지정한 태그 텍스트 변경 이벤트 테스트
join.addEventListener('click', EventJoin);

const Change1 = document.querySelector('.changeText-1')
const Change2 = document.querySelector('.changeText-2')
function ChangeText2() {
    if(Change1){
        Change1.innerText="텍스트"
}
}
// Change1.addEventListener('click', ChangeText);
Change2.addEventListener('click', ChangeText2);

// typeof: 사용되는 형식을 찾는다 ex)string, number
n = '838102050'
console.log('n = ' + n + ', and is a ' + typeof n)
// = n = 838102050, and is a string