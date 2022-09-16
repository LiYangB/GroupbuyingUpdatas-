

/* ---------------------------111111111------------------- */
// bodyer-center-left
// 使用onmouseover||onmouseout事件展示隐藏区域
const dropright=document.getElementById("dropright")
const droprightLi=dropright.getElementsByTagName("li")
// 为每一个对象循环加class
for(let i=0;i<droprightLi.length;i++){
    // 鼠标移入||移除对应效果展示
    droprightLi[i].onmouseover = function () {
        this.classList.add("show");
    }
    droprightLi[i].onmouseout = function () {
        this.classList.remove("show");
    }
}


/* ---------------------------111111111------------------- */
// bodyer-center-center-botton轮播图
const carousel = document.getElementById("carousel")
const left=document.getElementById("left")
const right=document.getElementById("right")
// 轮播图
const image = document.getElementById("image")
const links=document.getElementById("links")
// 轮播图下的小方块
const numList=document.getElementById("number").getElementsByTagName("li")
// 轮播图函数准备(初始化)
let add = 1
let toplunBoTu
var arr = ['http://www.baidu.com', 'http://www.jd.com', 'http://www.taobao.com', 'http://www.suning.com', 'http://www.bilibili.com', 'http://www.aqiyi.com']
numList[0].style.backgroundColor="#fff"
links.href=arr[0]

// 鼠标移入||移除对应效果展示
carousel.onmouseover=function(){
    left.style.display="block";
    right.style.display="block";
    // 鼠标移入轮播图停止移动
    clearInterval(toplunBoTu)
}
carousel.onmouseout=function(){
    left.style.display="none";
    right.style.display="none";
    // 鼠标移入轮播图自动移动
    carouselLi()
}
// 为轮播图添加图片
image.src="./images/ad01.jpg"
// 轮播图自动切换
function carouselLi(){
    toplunBoTu=setInterval(()=>{
        add++
        if(add>6){
            add=1
        };
        // 改图片
        image.src =`./images/ad0${add}.jpg`
        // 改网址
        var x=add-1;
        links.href = arr[x]
        // 改小方块颜色
        for(let i=0;i<numList.length;i++){
            numList[i].style.backgroundColor = "#3e3e3e"
            if(x==i){
                numList[i].style.backgroundColor = "#fff"
            }
        }
    },3000)
}
carouselLi()
// 点击轮播图左右箭头切换图片
left.onclick=function(){
    add--
    if (add <1) {
        add = 6
    };
    image.src = `./images/ad0${add}.jpg`
    var x = add - 1;
    links.href = arr[x]
    for (let i = 0; i < numList.length; i++) {
        numList[i].style.backgroundColor = "#3e3e3e"
        if (x == i) {
            numList[i].style.backgroundColor = "#fff"
        }
    }
}
right.onclick=function(){
    add++
    if (add > 6) {
        add = 1
    };
    image.src = `./images/ad0${add}.jpg`
    var x = add - 1;
    links.href = arr[x]
    for (let i = 0; i < numList.length; i++) {
        numList[i].style.backgroundColor = "#3e3e3e"
        if (x == i) {
            numList[i].style.backgroundColor = "#fff"
        }
    }
}
// 鼠标移动切换轮播图
for(let i=0;i<numList.length;i++){
    numList[i].onmouseover=function(){
        add=this.innerHTML;
        image.src = `./images/ad0${add}.jpg`
        var x = add - 1;
        links.href = arr[x]
        for (let i = 0; i < numList.length; i++) {
            numList[i].style.backgroundColor = "#3e3e3e"
            if (x == i) {
                numList[i].style.backgroundColor = "#fff"
            }
        }
    }
}
/* ---------------------------111111111------------------- */
// 猫眼电影
const movieShow = document.getElementById("movie-show")
// 箭头
const movieLeft=document.getElementById("movieleft")
const movieRight=document.getElementById("movieright")
// 正在热映||即将上映
const movieStart = document.getElementsByClassName("movie-center-top-span")[0]
const movieWile = document.getElementsByClassName("movie-center-top-span")[1]
const moviehot = document.getElementsByClassName("moviehot")
// 小三角
const x1=document.getElementsByClassName("x1")[0]
const x2=document.getElementsByClassName("x2")[0]
// 初始化
// 定时器
let movieLun
// 初始化小三角
x1.style.display = "block"
// 判断在那个界面
let isStart=true
// 初始化偏移量
let num=0
// 鼠标移入展示箭头
movieShow.onmouseover=function(){
    movieLeft.style.display="block"
    movieRight.style.display="block"
    // console.log(111)
}
movieShow.onmouseout=function(){
    movieLeft.style.display="none"
    movieRight.style.display="none"
}
// 鼠标移入正在上映
movieStart.onmouseover=function(){
    moviehot[0].style.display="block"
    moviehot[1].style.display="none"
    x1.style.display="block"
    x2.style.display="none"
    isStart = true
    num=0
}
// 鼠标移入即将上映
movieWile.onmouseover=function(){
    moviehot[1].style.display="block"
    moviehot[0].style.display="none"
    x2.style.display = "block"
    x1.style.display = "none"
    isStart = false
    num=0
}
// 点击箭头切换图片
movieRight.onclick=function(){
    // console.log(111)
    movieLun=setInterval(function(){
        num-=20;
        // 判断处于那个界面
        if(isStart){
            moviehot[0].style.left=num+"px"
        }else{
            moviehot[1].style.left = num + "px"
        }
        if (num <= -1170) {
            // 暂停定时器
            clearInterval(movieLun)
            // 将按键改为不可点击状态
            movieRight.disabled = "disabled"
            movieRight.innerHTML = "x"
            movieLeft.innerHTML = "&lt;";
            // 将另一个按键改为可点击
            movieLeft.disabled = false
        }
    }, 20);
}
movieLeft.onclick=function(){

    movieLun=setInterval(function(){
        num+=20;
        // 判断处于那个界面
        if(isStart){
            moviehot[0].style.left=num+"px"
        }else{
            moviehot[1].style.left = num + "px" 
        }
        if (num >= 0) {
            // 暂停定时器
            clearInterval(movieLun)
            // 将按键改为不可点击状态
            movieLeft.disabled = "disabled"
            movieLeft.innerHTML = "x"
            movieRight.innerHTML = "&gt;";
            // 将另一个按键改为可点击
            movieRight.disabled = false
        }
    }, 20);
}
/* ---------------------------111111111------------------- */
// 推荐民宿
const aTra=document.getElementsByClassName("aTra")
const aTraPar=document.getElementsByClassName("aTraPar")
const tablist = document.getElementsByClassName("tablist")
aTra[0].style.display = "block"
// 循环加事件更新界面
for(let i=0;i<aTra.length;i++){
    aTraPar[i].onmouseover=function(){
        // 展示小三角
        for (let j = 0; j < tablist.length; j++) {
            if (j == i) {
                aTra[j].style.display = "block"
            } else {
                aTra[j].style.display = "none"
            }
        }
        // 展示对应界面
        for(let j=0;j<tablist.length;j++){
            if(j==i){
                tablist[j].style.display="block"
            }else{
                tablist[j].style.display = "none"
            }
        }
    }
}
