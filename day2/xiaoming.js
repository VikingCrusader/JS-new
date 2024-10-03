class Human {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    run (){
        this.weight = this.weight - 0.5;
    }
    eat (){
        this.weight = this.weight + 1;
    }
}

let Xiaoming = new Human (
    "xiaoming",
    75
)
console.log(Xiaoming.weight);
Xiaoming.eat();
console.log(Xiaoming.weight);
Xiaoming.run();
Xiaoming.run();
Xiaoming.run();
console.log(Xiaoming.weight);