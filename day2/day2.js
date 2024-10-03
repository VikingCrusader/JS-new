//我们新建一个类：长方形
class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    //注意，类中用分号隔开，而单独的对象中只能用逗号隔开，很不一样
}
//复习：对象
var Person = {
    firstname : "Anna",
    familyname : "Kaufman",
    fullname : function () {
        console.log(this.firstname + " " + this.familyname);
    }
}
console.log(Person.firstname);
console.log(Person.familyname);
console.log(Person.fullname());

//类
class Champ {
    constructor(name, type, role, ultimate) {
        this.name = name;
        this.type = type;
        this.role = role;
        this.ultimate = ultimate;
    }
}
//new关键字 和let关键字,注意用小括号而不是花括号
let Aurora = new Champ (
    "Aurora",
    "mage, assassin",
    "midlaner, toplaner",
    "crowd control and huge damage"
)
let Smolder = new Champ (
    "Smolder",
    "marksman, scale",
    "AD carry",
    "Calling his mom and huge damage"
)
console.log(Aurora.ultimate);
console.log(Smolder.type);

let Hwei = new Champ (
    "Hwei",
    "Mage, poke",
    "Midlaner",
    "Slow and brust AOE damage"
)
console.log(Hwei.name);

class rectangle1 {
    constructor(length,width) {
        this.length = length;
        this.width = width;
    }
    area (){
        var area;
        area = this.length*this.width;
        return area;
    }
}

//类里面穿插函数，不在constructor里面。

let rec2 = new rectangle1(
    15,
    20
)
console.log(rec2.area());

//类的继承：使用另一个类来定义一个类
//关键字：Extend()

class animals {
    bark(){
        console.log("I can bark");
    }
    sleep(){
        console.log("I can sleep");
    }
}

class dogs extends animals{

}

class cats extends animals{

}

let Mydog = new dogs();
console.log(Mydog.bark());

class birds extends animals{
    fly () {
        console.log("I can fly");
    }
}

let Mybird = new birds();
console.log(Mybird.fly());
console.log(Mybird.sleep());
