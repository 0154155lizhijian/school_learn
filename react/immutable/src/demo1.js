const Immutable = require('immutable');
// Immutable 不可变的
let obj1 = Immutable.Map({a:1,b:2,c:3}); //prevState  
let obj2 = obj1                 //nextState
obj2 = obj2.set('b',4);

//传统的引用式赋值不可行，=> 深拷贝来处理
console.log(obj1);
console.log(obj2);
console.log(obj1===obj2)