//조건문


// typeof "15", typeof parseInt("15") : string을 number로 변경
// console.log(typeof "15", typeof parseInt("15"));
// parseInt 를 하는이유: 사용자에게 나이를 물어봤는데 사용자가 숫자가 아닌 걸 입력했을 경우에 인지를 할 수 있음


// typeof 함수의 타입을 알수있는 코드
// conditional(조건문): true인지 false 인지 알려주기 때문에 중요하다
// parseint: string을 number로 변환해주는 코드
// NaN: Not a Number
// isNaN: blooan(true와 false 를 구별해주는것)으로 구분을 해준다
// &&: AND(그리고) : 양쪽조건모두 true여야 하는 것  //// 예) (age >= 18 && age <= 50 )
// ||: OR : 둘 중 하나만 true인지 확인하는것
// >= : 많거나 같다, <= : 작거나 같다


// && 과 || 차이
// && : and
true && true === true
false && true === false
true && false === false
false && false === false
// || : or
true || true === true
false || true === true
true || false === true
false || false === false


// const age = parseInt(prompt('나이가 몇살 입니까?'))
// // console.log(isNaN(age));

// if(isNaN(age) || age < 0){
//     /// condition ==== true
//     console.log('Please write a real positive number');
// } else if(age < 18) {
//     console.log('You are too young.');
// } else if(age >= 18 && age <= 50 ) {
//     console.log('you can drink');
// } else if(age > 50 && age <= 80){
//     console.log('You should exercise')
// } else if(age > 80){
//     console.log('You can do whatever you want')
// }

//몇살
// const study = parseInt(prompt('몇살입니까?'))

// if(isNaN(study) || study < 0){
//     console.log('please age');
// } else if(study < 20) {
//     console.log('당신은 어립니다');
// } else if(study >= 20 && study <= 50){
//     console.log('술을 마셔요!');
// } else if(study > 50 && study <= 90){
//     console.log('운동을하세요')
// }

// if === 날씨로 해보자

//날씨
// const weather = parseInt(prompt('온도가 어떻게되나요?'));

// if(isNaN(weather)){
//     console.log('Please Number')
// } else if(weather < 10){
//     console.log('춥군요')
// } else if(weather >= 10 && weather <= 25 ) 
// {
//     console.log('선선하군요')
// } else if(weather >= 26 && weather <= 35){
//     console.log('덥습니다 습해요')
// } else if(weather >= 36 && weather <= 50) {
//     console.log('절대 밖에나가지마세요 충분히 수분섭취해주세요')
// } else if(weather >= 60) {
//     console.log('지구멸망')
// }

//날씨2
const weather2 = prompt('날씨가 어때요?');

if(weather2 === '비'){
    console.log('우산을 챙기세요');
} else if(weather2 === '화창') {
    console.log('피크닉 가세요!');
} else if(weather2 === '눈') {
    console.log('눈사람 만들어요');
}