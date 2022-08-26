//验证登录手机号码
var UsertelElement = document.querySelector(".user");
//光标离开
UsertelElement.onblur = checkUsertel;
function checkUsertel(){
    var userTel = UsertelElement.value;
    if(userTel == null || userTel == ""){
        document.querySelector(".user-none").innerText = "用户名不能为空！";
        return false;
    }
    else if(!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(userTel)){
        document.querySelector(".user-none").innerText = "用户名格式错误！";
        return false;
    }
    else{
        document.querySelector(".user-none").innerText = "";
        return true;
    }
}

//验证密码
var UserpwdElement = document.querySelector(".pwd");
//光标离开
UserpwdElement.onblur = checkUserpwd;
function checkUserpwd(){
    var pwd = UserpwdElement.value;
    if(pwd == null || pwd == ""){
        document.querySelector(".pwd-none").innerText = "密码不能为空";
        return false;
    }
    else{
        document.querySelector(".pwd-none").innerText = "";
        return false;
    }
}

document.querySelector(".denglu").onclick = getLoginValue;
function getLoginValue(){
    var usertel = document.querySelector(".user").value;
    var userpwd = document.querySelector(".pwd").value;
    var box = document.querySelector("input[type = checkbox]").checked;
    console.log("usertel:"+usertel);
    console.log("userpwd:"+userpwd);
    if(usertel && userpwd && box){
        document.querySelector(".error").innerText="";
        return true;
    }else if(!usertel || !userpwd){
        document.querySelector(".error").innerText="登陆账号或者密码错误！"
        return false;
    }
    else if(!box){
        document.querySelector(".no-agree").innerText="请勾选服务！";
        return false;
    }    
}
/*==============点击短信验证登录，账户登录隐藏=======================*/

document.querySelector(".login-panel .duanxin-login").onclick = function(){    
    $(".login-form").hide();
    $(".login-form2").show();
}


/**
 * 短信验证登录  验证手机号码
 */
 var UsertelElement2 = document.querySelector(".login-form2 .user");
 UsertelElement2.onblur = checkUsertel2;
 function checkUsertel2(){
    var userTel = UsertelElement2.value;
    if(userTel == null || userTel == ""){
        document.querySelector(".login-form2 .user-none").innerText = "用户名不能为空！";
        return false;
    }
    else if(!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(userTel)){
        document.querySelector(".login-form2 .user-none").innerText = "用户名格式错误！";
        return false;
    }
    else{
        document.querySelector(".login-form2 .user-none").innerText = "";
        return true;
    }
}
/**短信验证登录   验证验证码 */
var CodeElement = document.querySelector(".login-form2 .pwd");
CodeElement.onblur = checkCode;
function checkCode(){
    var code = CodeElement.value;
    if(code == null || code == ""){
        document.querySelector(".login-form2 .code-none").innerText = "验证码不能为空！";
        return false;
    }
    else if(!/^S{6}/.test(code)){
        document.querySelector(".login-form2 .code-none").innerText = "请输入六位验证码";
        return false;
    }
    else{
        document.querySelector(".login-form2 .code-none").innerText = "";
        return ture;
    }
}

document.querySelector(".login-form2 .denglu").onclick = getLoginValue;
function getLoginValue(){
    var tel = document.querySelector(".login-form2 .user").value;
    var code = document.querySelector(".login-form2 .pwd").value;
    var box1 = document.querySelector(".login-form2 input[type = checkbox]").checked;
    console.log("tel:"+tel);
    console.log("code:"+code);
    if(tel && code && box1){
        document.querySelector(".login-form2 .error").innerText="";
        return true;
    } if(!tel || !code){
        document.querySelector(".login-form2 .error").innerText="手机号或者验证码错误！"
        return false;
    }
     if(!box1){
        document.querySelector(".login-form2 .no-agree").innerText="请勾选服务！";
        return false;
    }    
  
}