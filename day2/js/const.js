// 상수 (Constant Variable)

let current_year = 2023;
current_year =2022;

console.log(current_year);

const MONTH = 12;

console.log("1년은 "+MONTH+"달이 있습니다.")

const PI = 3.14;
let radius = 4;
let circleArea;

// 연산
circleArea = PI * radius * radius;

//출력
document.write("원의 넓이: "+ circleArea+"<br><br>");

//공의 속도를 변환하는 프로그램 작성
//km -> mile, 변환상수 = 1.609, 1mile = 1.609km
let kph, mph ;
const RATE_KPH_MPH=1.609;
//입력
kph = prompt("구속을 입력하세요:","100" );

//연산
mph = kph / RATE_KPH_MPH;

//출력 자리수 설정함수: toFixed(자리수)
document.write(kph + "km는 "+mph.toFixed(2)+"mile입니다.")