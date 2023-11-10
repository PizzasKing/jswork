// main.js
let customer, colNum, rowNum;

customer = 21;
colNum = 5;

//나머지의 유무에 따른 조건문
if(customer % colNum ==0){
    rowNum = customer/colNum;
}else{
    rowNum = parseInt(customer / colNum) +1;
}

//좌석 번호 배치
document.write("<table>")
for(let i = 0; i<rowNum; i++){
    document.write("<tr>")
    for(let j = 1; j<=colNum; j++){
        let seatNum = colNum * i +j;
        if(seatNum>customer) break;
        document.write("<td>좌석"+seatNum+"</td>");
    }
    document.write("</tr>")
}
document.write("</table>")