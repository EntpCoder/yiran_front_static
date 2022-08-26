//验证手机号码
var UsertelElement = document.querySelector(".user");
//光标离开
UsertelElement.onblur = checkUsertel;
function checkUsertel(){
    var userTel = UsertelElement.value;
    if(userTel == null || userTel == ""){
        document.querySelector(".error").innerText = "用户名不能为空！";
        return false;
    }
    else if(!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(userTel)){
        document.querySelector(".error").innerText = "用户名格式错误！";
        return false;
    }
    else{
        document.querySelector(".error").innerText = "";
        return true;
    }
}


//验证密码
var UserpwdElement = document.querySelector(".login-pwd1 .pwd");
//光标离开
UserpwdElement.onblur = checkUserpwd;
function checkUserpwd(){
    var userPwd1 = document.querySelector(".login-pwd .pwd").value;
var userPwd2 = document.querySelector(".login-pwd1 .pwd").value;
    if(userPwd1 == null || userPwd1 == ""){
        document.querySelector(".pwd-none").innerText = "密码不能为空";
        return false;
    }
    else if(userPwd1 != userPwd2){
        document.querySelector(".pwd-none").innerText = "两次密码输入不一致";
        return false;
    }
     else if(userPwd2 == null || userPwd2 == ""){
        document.querySelector(".pwd-none").innerText = "请再次输入密码";
        return false;
    }
}

document.querySelector(".zhuce").onclick = getzhuceValue;
function getzhuceValue(){
    var usertel = document.querySelector(".user").value;

    var box = document.querySelector("input[type = checkbox]").checked;

    if(usertel && box && checkUserpwd){
        document.querySelector(".error").innerText="";
        return true;
    }else if(!usertel || !checkUserpwd){
        document.querySelector(".error").innerText="登陆账号或者密码错误"
        return false;
    }
    else if(!box){
        document.querySelector(".no-agree").innerText="请勾选服务";
        return false;
    }
}
