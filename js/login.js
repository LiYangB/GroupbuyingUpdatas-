
// 获取注册的手机号与密码
let str=location.href;
let params=getUrl(str);
// 提交按钮
const loginSubmit=document.getElementById("submit")
let isOne=false;
let isTwo =false
function getUrl(url){
    var infoUrl={};
    // 判断网址是否含参
    var index=url.indexOf("?");
    if(index!==-1){
        // 将?后字符串截取
        let str=url.substr(index+1);
        // console.log(typeof(str))
        // console.log(str)
        // 拆分
        let strs=str.split("&");
        // console.log(strs)
        for(let i=0;i<strs.length;i++){
            infoUrl[strs[i].split("=")[0]]=(strs[i].split("=")[1])
        }
    }
    return infoUrl
}
/* ---------------------------判断手机号与密码是否一致------------------- */
// 获取登录的用户手机号与密码
var userName = document.getElementById("username");
var userPass = document.getElementById("userpass");

//获得焦点函数
userName.onfocus = function () {
    userPass.className = "display-none";
}
//键盘按下函数
userName.addEventListener("keyup", function () {
    //判断重复密码是否正确
    if (userName.value != params["phone"]) {
        userPass.className = "display-inline icon-times-circle";
        userPass.innerHTML = "手机号码不正确！"
        // 禁用提交按钮
        loginSubmit.setAttribute("disabled", true);
        loginSubmit.style.color = "red"
    } else {
        userPass.className = "display-inline icon-check-circle";
        userPass.innerHTML = "手机号码正确！";
        isOne = true;
        if (isOne && isTwo) {
            loginSubmit.removeAttribute('disabled');
            loginSubmit.style.color = "black"
        }
    }
},false)

//密码是否匹配
var password = document.getElementById("password");
var passTo = document.getElementById("passto");
//获得焦点函数
password.onfocus = function () {
    passTo.className = "display-none";
}
//键盘按下函数
password.onkeyup = function () {
    //判断重复密码是否正确
    if (password.value != params["pass"]) {
        passTo.className = "display-inline icon-times-circle";
        passTo.innerHTML = "密码不正确！";
        // 禁用提交按钮
        loginSubmit.setAttribute("disabled", true);
        loginSubmit.style.color = "red"
    } else {
        passTo.className = "display-inline icon-check-circle";
        passTo.innerHTML = "密码正确！";
        isTwo=true;
        if (isOne && isTwo) {
            loginSubmit.removeAttribute('disabled');
            loginSubmit.style.color = "black"
        }
    }
}
//点击后提交数据到index.html
loginSubmit.onclick = function () {
    //alert(1);
    if (password.value == "" || userName.value == "") {
        alert("请填写信息后登录");
    } else {
        //跳转页面
        window.location.href = "./index.html?username=" + userName.value;
    }
}