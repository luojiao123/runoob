/**
 * Created by XinxiWang on 2017/5/10.
 */

// 运动函数
function startMove(obj,json,fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var name in json){
            var iTarget = json[name]; // 目标点
            if(name == 'opacity'){
                var cur = parseInt(parseFloat(getStyle(obj,name))*100);
            }else {
                var cur = parseInt(getStyle(obj,name));
            }
            var speed = (iTarget-cur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(name == 'opacity'){
                obj.style.opacity = (cur+speed)/100;
            }else {
                obj.style[name] = cur +speed +'px';
            }
            if(cur!= iTarget){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fnEnd){
                fnEnd();
            }
        }
    },30);
}

// 获取css样式
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}