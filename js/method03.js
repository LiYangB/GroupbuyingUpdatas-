
//获取节点
const addrShow3=document.getElementById("addr-show03");
const dataOrder=document.getElementById("data-order").querySelectorAll("li");
const dataShow=document.getElementById("data-show");

(function info(){
    showHotCity()
})() 

// 初始化自动加载热门城市
function showHotCity() {
    dataOrder[0].className = 'cityOn';
    var citysLen = cityAll[0].citys.length;
    var dl = document.createElement('dl');
    var dt = document.createElement('dt');
    dt.innerText = cityAll[0].name;
    var dd = document.createElement('dd');
    dl.appendChild(dt);
    dl.appendChild(dd);
    // 初始化展示区
    for (var i = 0; i < citysLen; i++) {
        var aCity = document.createElement('a');
        aCity.innerText = cityAll[0].citys[i];
        dd.appendChild(aCity);
    }
    dataShow.appendChild(dl);
}
//点击li显示不同的城市
dataOrder.forEach(function (value, index) {
    value.onclick = function () {
        for (var z = 0; z < 7; z++) {
            if (z == index)
                dataOrder[index].className = 'cityOn';
            else
                dataOrder[z].className = '';
        }
        dataShow.innerHTML = '';
        switch (index) {
            case 0:
                showHotCity();
                break;
            case 6:
                showCitys(index, 2);
                break;
            default:
                showCitys(index, 4);
        }
    }
});
/*显示城市的具体方法*/
function showCitys(index, m) {
    var currentAll = cityAll.slice(4 * index - 3, 4 * index + m - 3);
    // 初始化
    var dl = [];
    for (var j = 0; j < m; j++) {
        dl[j] = document.createElement('dl');
        // 创建A,B,C等
        var dt = document.createElement('dt');
        dt.innerText = currentAll[j].name;
        dl[j].appendChild(dt);
        // 创建对应城市
        // 获取每个字母对应城市长度
        var citysLen = currentAll[j].citys.length;
        // 将城市添加到dd中
        var dd = document.createElement('dd');
        for (var k = 0; k < citysLen; k++) {
            var aCity = document.createElement('a');
            aCity.innerText = currentAll[j].citys[k];
            dd.appendChild(aCity);
        }
        dl[j].appendChild(dd);
        dataShow.appendChild(dl[j]);
    }
}
//点击城市后将结果添加到输入框中
dataShow.onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target && target.nodeName == 'A') {
        addrShow3.value = target.innerText;
        // 取消提交禁止
        cityto.removeAttribute('disabled');
        cityto.style.background = "#fff"
        cityto.style.cursor = "pointer"
    }
}
//将获取到的城市列表添加到页面中
//获取cityto节点
var cityto = document.getElementById('cityto');
cityto.setAttribute("disabled", true);

cityto.onclick = function () {
    var info=""
    if (addrShow.value !==""){
        info = addrShow.value
    } else if (addrShow2.value!==""){
        info = addrShow2.value
    }else{
        info = addrShow3.value
    }
    //跳转页面
    window.location.href = "./index.html?city=" + info;
}