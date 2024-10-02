//10月2日 Day1.
//1.复习如何把js写到html文件之外
//也可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码。
//
// 外部 JavaScript 文件的文件扩展名是 .js。
//
// 如需使用外部文件，请在 <script> 标签的 "src" 属性中设置该 .js 文件：
//代码写在body标签里面，大致为：<script src = "day1.js"></script>

//2.JS的对象 对象的赋值
var car = "Fiat";  //这是为普通变量赋值

var car = {name :"Fiat", model:500, color:"white"};
//在上面的实例中，3个值("Fiat",500,"white")被赋予变量car
//3. 对象的定义
//使用花括号定义变量
var Person = {firstname:'John', lastname:'Doe', age:'50',eyeColor:'blue'};
//上述在一行内定义的并不方便读写，一般情况下都是换行打出来
var Person2 = {
    sex:"male",
    age:"20",
    salary:"4000 euro",
}
//注意 var 对象名 = {}大括号
// 对象中间用逗号隔开，并非分号

//4.JS对象属性
//可以说”Javascript对象是变量的容器“。
//但是，我们通常认为JS对象是键值对的容器
//键值对的写法为name：value（键与值用冒号分开）

//5.访问对象属性
//用类.属性来访问属性！！
console.log(Person.lastname);
console.log(Person2.salary);
//对象方法
//对象方法定义了一个函数，并作为对象的属性存储
var Person3 = {
    sex:"female",
    age:"22",
    surname:"Su",
    firstname:"Xi",
    salary:"4000 euro",
    fullname : function ()
    {
        return this.firstname + " " + this.surname;
    }

}
console.log(Person3.fullname());//别忘了括号！！
//this的用法：调用对象本身
