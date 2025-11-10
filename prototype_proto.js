// prototype  只存在于构造函数上   __proto__ 存在每个对象上
// prototype  和 proto

// 重写Object
// function Object(name) {
//     this.name = name 
// }

// const obj = new Object('实例')

function Person(id){
    this.id = id
}
Person.prototype.sayName = function(){
    console.log(this.id);
}
const me = new Person('1')

console.log(Person.prototype);
me.sayName()
console.log(Object);
//console.log(me.id);
console.log(Person.prototype.__proto__ === Object.prototype);



