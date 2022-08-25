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
        document.querySelector(".error").innerText="登陆账号或者密码错误"
        return false;
    }
    else if(!box){
        document.querySelector(".no-agree").innerText="请勾选服务";
        return false;
    }

    
}

