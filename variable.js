var a;
console.log(typeof a)
a=10
console.log(typeof a)
a='String'
console.log(typeof a)
a=true
console.log(typeof a);
a=null
console.log(typeof a);

var b = b || 0; // ways to default a vaule for a variable
console.log(b);

// undefined,0,EMPTY_STRING, null are all false
if(!undefined){
    console.log('undefined is false')
    if(!(a='')){
        console.log('a=\'\' is false')
        if(!(a=0) ){
            console.log('a=0 is false')
            if(!(a=null)){
                console.log('a=null is')
            }
        }
    }
}

