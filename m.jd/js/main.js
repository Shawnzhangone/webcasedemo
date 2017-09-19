/**
 * Created by zhang on 2017/7/7.
 */
window.onload = function () {
    search();
    secondKill();
};

// 头部颜色渐变
 var search = function () {
     var jdHeader = document.getElementsByClassName("jd-header-box")[0];
     var height = document.getElementsByClassName("jd-banner")[0].offsetHeight;
     window.onscroll = function () {
       var top = document.body.scrollTop;
         if(top > height){
             jdHeader.style.background = "rgba(201,21,35,0.85)";
         }else{
             var opc = top / height * 0.85;
             jdHeader.style.background = "rgba(201,21,35,"+ opc +")";
         }
     };
 };

// 秒杀倒计时
 function secondKill() {
     var timeList = document.getElementsByClassName("sk-num");
     //console.log(timeList.length);

     var times = 4 * 60 * 60;
     setInterval(function () {
        times--;
         var h = Math.floor(times / 60 / 60);
         var m = Math.floor(times / 60 % 60);
         var s = times % 60;
         //console.log(h+"-"+m+"-"+s);
         timeList[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
         timeList[1].innerHTML = h % 10;
         timeList[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
         timeList[3].innerHTML = m % 10;
         timeList[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
         timeList[5].innerHTML = s % 10;
     },1000);
 }