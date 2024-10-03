//需求：进入某web登录页面，输入用户名，密码，验证码之后登陆系统
class LoginPage {
    constructor(username,password,code) {
        this.username = '';
        this.password = '';
        this.code = '';
    }
    login (){
        this.username = prompt("Please enter your username:");
        this.password = prompt("Please enter your password:");
        this.code = prompt("Please enter your sms code:");

        alert(`Logging in with Username: ${this.username}, Password: ${this.password}, Code: ${this.code}`);
        alert('Login Succeessful!');
    }
}

let loginpage = new LoginPage();
loginpage.login();