const age = 96;

// 2. 이동 한 calculatorKrAge(age), calculatorKrAge(ageOfForeigner) 둘이 리턴이 됨 으로써
function calculatorKrAge(ageOfForeigner){
            // 3. const age 와 ageOfForeigner 가 계산을 하게된다
    return ageOfForeigner + 2;
    //
}
// 1. const age = 96 이 calculatorKrAge(age) 여기로 이동하게 되고 
const krAge = calculatorKrAge(age)
// 4. 그래서 console.log 로 불러오면 98의 값이 나온다
console.log(krAge);


const add = 20
const bdd = 50

function TestAdd(PlusAdd, PlusBdd){
    // PlusAdd 20 PlusBdd 50
    return PlusAdd + PlusBdd;
}

// add 20 bdd 50
const add2 = TestAdd(add, bdd);
console.log(add2);

const study1 = 10;

function studyStd(study){
    study + 2
    return 'HELLO';
}

const study2 = studyStd(study1)
console.log(study2);


// const calculator = {
//     Plus: function(a,b){
//         return "님의 점수는 " + a+b + " 입니다";
//     },
//     minus: function(a,b){
//         return a-b;
//     },
//     times: function(a,b){
//         return a/b;
//     },
//     divide: function(a,b){
//         return a*b;
//     },
//     power: function(a,b){
//         return a**b;
//     }
// };
// const plusResult = calculator.Plus(1, 5);
// const minusResult = calculator.minus(Plus, 5);
// const timesResult = calculator.times(10, Plus2);
// const divideResult = calculator.divide(Plus3, Plus);
// const powerResult = calculator.power(Plus4, Plus2);

// return 하는순간 자바스크립트는 종료가된다 그게 자바스크립의 규칙이다


const TestReturn = {
    str: function(a){
        return a
    },
    str2: function(a,b){
        // return alert("훈이의 수학 점수는 " + (a + b)  + " 입니다.")
    }
}

const TestVelue = TestReturn.str(50);
const TestVelue2 = TestReturn.str2(TestVelue, 50);

// const TestR = {
//     s: function(a, b){
//        return alert(a + b);
//     },
//     s2: function(a, b){
//         return alert(a - b);
//     }
// };
// const TestV = TestR.s(50,80);
// const TestV2 = TestR.s2(50,10);