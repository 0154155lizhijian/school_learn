//宅
function Otaku(name,age){
  this.name = name;
  this.age = age;
  this.habit = 'Games';

}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function(){
    console.log(`i am ${this.name}`);
}
var person = new Otaku('Kevin','18');
console.log(person.name,person.habit,person.strenth,person.age);
person.sayYourName();