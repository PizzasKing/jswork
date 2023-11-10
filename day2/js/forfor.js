// forfor.js forfor.html연결
// 중첩 for문 쇼츠

//5행 5열에 문자열 출력
for(let i = 1; i<=5; i++){
    for(let j = 1; j<= 5; j++){
        document.write("$");
    }
    document.write("<br>")
}
for(let i = 2; i<=9; i++){
    for(let j = 1; j<= 5; j++){
        document.write(i+" x "+j+" = "+ (i*j)+"<br>");
    }
    document.write("<br>")
}