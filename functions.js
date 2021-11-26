// there are 2 default arguments to every function call. they are arguments and this
//function callme(){
//var i;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
        
    }
//}

function sample(params) {
    console.log(arguments);
   // console.log(this)
}

sample(1,2,2,3,4);

//What are the ways of calling a function



//this keyword

var fun2 = function(){
    //this refers to global object
    console.log(this)
}

var obj1 = {
    name : "sasi",
    fun1 : function(){
        //this obj1
        console.log(this)
    }
};
obj1.fun1()
fun2();



