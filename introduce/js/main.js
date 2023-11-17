//이미지 show
window.onload = function () {
    let picture = ["images/bonobg.jpg", "images/pizzaking.jpg"]
    let p_idx = 0;

    showPicture();
    function showPicture() {
        document.querySelector("#pic").src = picture[p_idx];
        p_idx++;
        if (p_idx === picture.length)
            p_idx = 0;
        setTimeout(showPicture, 1000); //콜백 함수
    }

    // 디지털 시계
    setInterval(myWatch, 1000);

    function myWatch() {
        var date = new Date();
        var now = date.toLocaleTimeString();
        document.getElementById("demo").innerHTML = now;
    }
}
