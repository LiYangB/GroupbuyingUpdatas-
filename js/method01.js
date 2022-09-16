//节点获取
// 确认按钮
var btn = document.getElementsByClassName("met1")[0];
// 展示
var addrShow = document.getElementById("addr-show");
// 省-市-区
var prov = document.getElementById("prov");
var city = document.getElementById("city");
var country = document.getElementById("country");
//用于保存省市区
var current = {
    prov,
    city,
    country
};
//立即执行函数(获取省份)
(function showProv() {
    //alert(1);
    btn.disabled = true;
    //获取城市列表的长度
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        //创建一个option的节点
        var provOpt = document.createElement('option');
        //加入数据
        provOpt.value = provOpt.innerText = provice[i]['name'];
        //将节点插入到select节点里面
        prov.appendChild(provOpt);
    }
})();

// 根据省份展示对应城市
function showCity(obj) {
    //获取省份下拉框的值
    var val = obj.options[obj.selectedIndex].value;
    // console.log(val);

    //当两次传值不一样的时候我们要清空(视频中的处理方式)
    if (val != current.prov) {
        current.prov = val;
        city.length = 1;
    }


    //查找省的索引
    if (val != ' ') {
        //查找省的索引
        // 省份数量
        var len = provice.length;
        var provIndex = 0;
        for (var i = 0; i < len; i++) {
            // 找到用户选择的省份的索引
            if (val == provice[i]['name']) {
                provIndex = i;
            }
        }
    }
    //遍历市的节点
    var cityLen = provice[provIndex]["city"].length;
    for (var j = 0; j < cityLen; j++) {
        //创建市的节点
        var cityOpt = document.createElement('option');
        //想下拉列表里面添加
        cityOpt.value = cityOpt.innerText = provice[provIndex]["city"][j].name;
        city.appendChild(cityOpt);
    }
    // console.log(current)
}
// 根据所选城市确定区县
function showCountry(obj){
    // 获取所选城市
    var val=obj.options[obj.selectedIndex].value;
    //当两次传值不一样的时候我们要清空(视频中的处理方式)
    if (val != current.city) {
        current.city= val;
        country.length = 1;
    }
    // 查找省份索引
    var provLen=provice.length;
    let provIndex=0;
    for(let i=0;i<provLen;i++){
        if(current.prov==provice[i]['name']){
            provIndex=i;
            break;
        }
    }
    //查找城市的索引
    var cityLen = provice[provIndex]["city"].length;
    var cityIndex = 0;
    for (var i = 0; i < cityLen; i++) {
        if (current.city == provice[provIndex]["city"][i].name) {
            cityIndex = i;
            break;
        }
    }
    // 添加县区节点
    if (val != ' ') {
        var countryLen = provice[provIndex]["city"][cityIndex].districtAndCounty.length;
        //如果只有省市没有区县要处理一下
        if (countryLen==0){
            let countryOpt = document.createElement('option');
            countryOpt.innerText = countryOpt.value="无"
            country.appendChild(countryOpt);
        }else{
        for (var n = 0; n < countryLen; n++) {
            var countryOpt = document.createElement('option');
            countryOpt.innerText = provice[provIndex]["city"][cityIndex].districtAndCounty[n];
            countryOpt.value = countryOpt.innerText
            country.appendChild(countryOpt);
        }
    }
    }
    // console.log(current)
}
/*选择县区之后的处理函数*/
function selecCountry(obj) {
    current.country = obj.options[obj.selectedIndex].value;
    if ((current.city != '') && (current.country != '')) {
        btn.disabled = false;
    }
}

/*点击确定按钮显示用户所选的地址*/
function showAddr() {
    addrShow.value = current.prov + '-' + current.city + '-' + current.country;
    cityto.removeAttribute('disabled');
    cityto.style.background="#fff"
    cityto.style.cursor="pointer"
}