//global.names = 'Janani'
var obj = {
    name : "sasi Kumar",
    showMe : function showMe(){
        return this.name;
    }
}

var obj1 = new Date();

console.log(obj1.toDateString());
console.log(obj.showMe())

function Employee(names,age){
    this.names = names;
    this.age = age
    this.greet = function() {
        console.log(this.names);
    }
}

const emp = new Employee('Sasi', 35)

emp.greet();

const greet = emp.greet;
//results in undefined as greet points to only greet func in employee, in the context below this refers to global object of node
//to confirm this uncomment line and try
greet();
//Other ways to call a function with different this reference 
greet.call(emp);
greet.apply(emp);




