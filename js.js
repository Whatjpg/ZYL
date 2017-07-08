/**
 * Created by dell on 2017/7/8.
 */
window.onload = function () {
    var Lunbo = document.getElementById('Lunbo'),
        Lun = document.getElementById('Lun').getElementsByTagName('img'),
        bo = document.getElementById('bo').getElementsByTagName('li'),
        index = 0,
        timer = setInterval(autoPlay,3000);
    function autoPlay() {
        if(++index >= Lun.length) index = 0;
        changeLun(index);
    }
    function changeLun(ccc) {
        for (var i =0;i<Lun.length;++i){
            Lun[i].style.display= "none";
            bo[i].className = "";
        }
        Lun[ccc].style.display = "block";
        bo[ccc].className = "on";
    }
    Lunbo.onmouseover = function () {
        clearInterval(timer);
    }
    Lunbo.onmouseout = function () {
        timer = setInterval(autoPlay,3000);
    }
}