/**
 * Created by zhang on 2017/5/2
 */

function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json){
            var currentSty = 0;
            if(attr == "opacity"){
                currentSty = parseInt(getStyle(obj,attr)*100);//透明度小数
                //console.log(currentSty);
            }else{
                currentSty = parseInt(getStyle(obj,attr));
            }
            var step = (json[attr] - currentSty)/10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(attr == "opacity"){//透明度
                if("opacity" in obj.style){
                    obj.style.opacity = (currentSty + step)/100;
                }
                else {
                    obj.style.filter = "alpha(opacity ="+(current + step)+")"; //兼容ie透明度
                }
            }else if (attr == "zIndex"){//z-index值
                obj.style.zIndex = json[attr];
            }else {
                obj.style[attr] = currentSty + step+"px";
            }
            if(currentSty != json[attr]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){//回调函数
                fn();
            }
        }
    },10)
}

function getStyle(obj,attr) {
    if(obj.currentStyle){return obj.currentStyle[attr];}
    else{return window.getComputedStyle(obj,null)[attr];}
}