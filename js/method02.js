// 获取节点
const addrShow2 = document.getElementById("addr-show02")


const titleWrap = document.getElementById("title-wrap");
const titleWrapLi = titleWrap.getElementsByTagName("li");
const addrWrap = document.getElementById("addr-wrap");

//对象的声明
var current2 = {
    prov: '',
    city: '',
    country: '',
    provVal:"",
    cityVal: '',
    countryVal: ''
}

// 自动加载省份信息
window.onload=showProv2();
// 初始化展示区
function showProv2() {
    // 先将展示区清空
    addrWrap.innerHTML=""
    titleWrapLi[0].className="titleSel"
    // 展示省份
    var len=provice.length
    for(let i=0;i<len;i++){
        var proLi=document.createElement("li");
        proLi.innerText=provice[i]["name"];
        // 点击的第几个省份
        proLi.index=i;
        addrWrap.appendChild(proLi)
    }
}
//分别点击省市区标题进行选项卡切换
titleWrap.onclick = function (e) {
    //alert(e);
    //兼容火狐谷歌和IE
    var e = e || window.event;
    //谷歌支持||IE支持   
    var target = e.target || e.srcElement;
    //target.nodeName 获取触发的标签名
    if (target && target.nodeName == 'LI') {
        for (var z = 0; z < 3; z++) {
            titleWrapLi[z].className = ' ';
        }
        target.className = 'titleSel';
        if (target.value == '0') {
            showProv2();
        } else if (target.value == '1') {
            addrWrap.innerHTML = "请先选择对应的省份"
        } else if (target.value == '2') {
            addrWrap.innerHTML = "请先选择对应的省份"
        }
    }
}
/*需要给动态生成的li绑定点击事件*/
addrWrap.onclick = function (e) {
    // 是在那个大页面
    var n;
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target && target.nodeName == 'LI') {
        /*先判断当前显示区域显示的是省市区的那部分*/
        for (var z = 0; z < 3; z++) {
            if (titleWrapLi[z].className == 'titleSel')
                n = z;
        }
        /*显示的处理函数*/
        switch (n) {
            case 0:
                showCity2(target.index);
                break;
            case 1:
                showCountry2(target.index);
                break;
            case 2:
                selectCountry(target.index);
                break;
            default:
                showProv2();
        }
    }
};
/*选择省份之后显示该省下所有城市*/
function showCity2(index) {
    // 将展示区清空
    addrWrap.innerHTML = '';
    // 获取点击的省份的索引
    current2.prov = index;
    // 根据索引找到省份
    current2.provVal = provice[index].name;
    // 更新下划线
    titleWrapLi[0].className = '';
    titleWrapLi[1].className = 'titleSel';
    // 获取省份下城市长度
    var cityLen = provice[index].city.length;
    // 展示城市
    for (var j = 0; j < cityLen; j++) {
        var cityLi = document.createElement('li');
        cityLi.innerText = provice[index].city[j].name;
        cityLi.index = j;
        addrWrap.appendChild(cityLi);
    }
}
/*选择城市之后显示该市下的区*/
function showCountry2(index) {
    // 将展示区清空
    addrWrap.innerHTML = '';
    // 获取点击的城市的索引
    current2.city = index;
    // 根据索引找到城市
    current2.cityVal = provice[current2.prov].city[index].name;
    // 更新下划线
    titleWrapLi[1].className = '';
    titleWrapLi[2].className = 'titleSel';
    // 获取城市下区县长度
    var countryLen = provice[current2.prov].city[index].districtAndCounty.length;
    // 展示区县
    if (countryLen==0){
        var countryLi = document.createElement('li');
        countryLi.innerText="无"
        addrWrap.appendChild(countryLi);
    }else{
        for (var j = 0; j < countryLen; j++) {
         var  countryLi = document.createElement('li');
         countryLi.innerText = provice[current2.prov].city[index].districtAndCounty[j];
         countryLi.index = j;
         addrWrap.appendChild(countryLi);
        }
    }
}
// 展示所选
function selectCountry(index){
    // 获取点击的区县的索引
    current2.country = index;
    // 根据索引找到区县
    current2.countryVal = provice[current2.prov].city[current2.city].districtAndCounty[index];
    // 展示所选
    addrShow2.value = current2.provVal + '-' + current2.cityVal + '-' + current2.countryVal;
    addrWrap.getElementsByTagName('li')[index].style.backgroundColor = '#ffc300';
    // 取消提交禁止
    cityto.removeAttribute('disabled');
    cityto.style.background = "#fff"
    cityto.style.cursor = "pointer"
}
