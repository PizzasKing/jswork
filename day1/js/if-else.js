let limit_speed = 55;

if(limit_speed>=50){
    document.write("속도 위반입니다. <br>")
}

document.write("시속 "+ limit_speed+"km입니다.")

if(limit_speed == null){
    document.write("입력이 취소되었습니다.")
}