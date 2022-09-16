
/* ---------------------------手机号码验证------------------- */

//手机号码验证
// 获取phone节点
var phone = document.getElementsByName('phone');
var span = document.getElementsByTagName('span');
// 表单提交按钮
var frmContact = document.getElementById("frmContact");
let isOne=false;
let isTwo=false;
let isThere=false;
//获得焦点函数
phone[0].onfocus = function () {
    phone[0].style.border = "1px solid #ffbe00";
    span[0].className = "display-none";
}
//失去焦点函数
phone[0].onblur = function () {
    //设置边框的颜色
    phone[0].style.border = "1px solid #aaa";
    //获取边框的值
    var phoneValue = phone[0].value.trim();
    // console.log(phoneValue)
    //判断手机号码不能为空
    if (phoneValue == "") {
        span[0].className = "display-inline icon-times-circle";
        span[0].innerHTML = "请输入您的手机号码";
        // 如果为空,禁用表单提交按钮
        frmContact.setAttribute("disabled", true);
        frmContact.style.color="red"
    }
    //判断手机号码是否正确
    if (phoneValue != "") {
        if (!(/^1[3456789]\d{9}$/.test(phoneValue))) {
            span[0].className = "display-inline icon-times-circle";
            span[0].innerHTML = "请填写正确的11位号码";
            // 如果为空,禁用表单提交按钮
            frmContact.setAttribute("disabled", true);
            frmContact.style.color="red"
        } else {
            span[0].className = "display-inline icon-check-circle";
            span[0].innerHTML = "手机号码可以使用！";
            isOne=true;
            if (isOne && isTwo && isThere) {
                frmContact.removeAttribute('disabled');
                frmContact.style.color = "black"
            }
        }
    }
}

/* ---------------------------手机验证码验证------------------- */

// 手机验证码验证
var button=document.getElementsByTagName("button");
button[0].onclick=function(){
    // 随机生成四位数
    function randomd(){
        var randomdfour =Math.floor(Math.random()*(9000)+1000)
        return randomdfour
    }
    // 获取生成数
    var randomde=randomd();
    span[1].className="display-inline"
    span[1].innerHTML=randomde
}

/* ---------------------------短信验证------------------- */

//短信验证
const code=document.getElementById("code")
code.onfocus=function(){
    // console.log(1)
    code.style.border ="1px solid #ffbe00"
}
code.onblur=function(){
    code.style.border ="1px solid #aaa"
    // 获取用户输入(去除空格)
    var codeValue=code.value.trim();
    // 获取系统给出的验证码
    var spanValue=span[1].innerHTML;
    // 判断是否正确
    if(codeValue==""){
        span[2].className = "display-inline icon-times-circle";
        span[2].innerHTML = "验证码不能为空";
        // 如果为空,禁用表单提交按钮
        frmContact.setAttribute("disabled", true);
        frmContact.style.color="red"
    } else if (codeValue !=spanValue ){
        span[2].className = "display-inline icon-times-circle";
        span[2].innerHTML = "验证码不正确";
        // 如果为空,禁用表单提交按钮
        frmContact.setAttribute("disabled", true);
        frmContact.style.color="red"
    }else{
        span[2].className = "display-inline icon-check-circle";
        span[2].innerHTML = "验证码正确";
        isTwo=true;
        if (isOne && isTwo && isThere) {
            frmContact.removeAttribute('disabled');
            frmContact.style.color = "black"
        }
    }
}
/* ---------------------------密码强度------------------- */
//密码强度判定
//字符串声明
var aStr = ["弱", "中", "强", "安全"];
//用户输入内容检测函数
function checkStrong(val) {
    var modes = 0;
    if (val.length < 6) return 0;
    if (/\d/.test(val)) modes++; //数字
    if (/[a-z]/.test(val)) modes++; //小写
    if (/[A-Z]/.test(val)) modes++; //大写 
    if (/\W/.test(val)) modes++; //特殊字符
    if (val.length > 12) return 4;
    return modes;
};
// 获取用户输入完内容 键盘松开的时候
var password = document.getElementById("password");
// 改变边框颜色
password.onfocus = function () {
    password.style.border = "1px solid #ffbe00";
}
password.onblur = function () {
    password.style.border = "1px solid #aaa";
}
password.onkeyup = function () {
    // 获取用户输入的内容
    var val = password.value;
    //执行函数判断用户输入内容是否安全
    var num = checkStrong(val);
    //获取id为tips下的所有span节点
    var tipsSpan = document.getElementById("tips").getElementsByTagName("b");
    //根据返回值设置密码强度的颜色
    switch (num) {
        case 0:
            break;
        case 1:
            tipsSpan[0].style.backgroundColor = "red";
            tipsSpan[0].innerHTML = aStr[0];
            break;
        case 2:
            tipsSpan[0].style.backgroundColor = "yellowgreen";
            tipsSpan[1].style.backgroundColor = "yellowgreen";
            tipsSpan[0].innerHTML = aStr[0];
            tipsSpan[1].innerHTML = aStr[1];
            break;
        case 3:
            //遍历颜色
            for (var i = 0; i < 3; i++) {
                tipsSpan[i].style.backgroundColor = "green";
                tipsSpan[i].innerHTML = aStr[i];
            }
            break;
        case 4:
            //遍历颜色
            for (var i = 0; i < 4; i++) {
                tipsSpan[i].style.backgroundColor = "green";
                tipsSpan[i].innerHTML = aStr[i];
            }
            break;
        default:
            break;
    }
}

/* ---------------------------判断密码是否一致------------------- */
//密码匹配判定
var passrepeat = document.getElementById("passrepeat");
//获得焦点函数
passrepeat.onfocus = function () {
    passrepeat.style.border = "1px solid #ffbe00";
    span[3].className = "display-none";
}
//失去焦点函数
passrepeat.onkeyup = function () {
    // //设置边框的颜色
    // passrepeat.style.border = "1px solid #aaa";
    //获取确认密码的值
    var passrepeatValue = passrepeat.value;
    //获取密码的值
    var passwordValue = password.value;
    //判断重复密码是否正确
    if (passrepeatValue != passwordValue) {
        span[3].className = "display-inline icon-times-circle";
        span[3].innerHTML = "两次填写密码不匹配！";
        // 禁用表单提交按钮
        frmContact.setAttribute("disabled", true);
        frmContact.style.color="red"
    } else {
        span[3].className = "display-inline icon-check-circle";
        span[3].innerHTML = "密码匹配！";
        isThere=true
        if (isOne&&isTwo&&isThere){
        frmContact.removeAttribute('disabled');
        frmContact.style.color = "black"
    }
    }
}
/* ---------------------------提交按钮------------------- */
//点击注册按钮跳转页面
frmContact.onclick = function () {
    if (phone[0].value == "" || code.value == "" || password.value == "" || passrepeat.value == "") {
        alert("请填写信息后再注册");
    } else {
        //跳转页面
        window.location.href = "./login.html?phone=" + phone[0].value + "&pass=" + password.value;
    }
}