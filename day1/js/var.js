// var.js
// ?학생은 ?학년 ?반입니다.
// document.write()
// 변수이름에 예약어는 사용불가(if, class, int)

var sName = "우영우";
var sGrade = 3;
var sClass = 4;

// 출력
document.write(sName, sGrade, sClass +'<br>');
document.write(sName + " 학생은 "+ sGrade+"학년 " +sClass+ "반 입니다.");


//charset(문자셋) 연습
var ch1 = 65;
console.log(ch1);
console.log(String.fromCharCode(ch1));

var ch2 = 'B';

let ch3 = '가';
console.log(ch3);
console.log(ch3.charCodeAt(0))