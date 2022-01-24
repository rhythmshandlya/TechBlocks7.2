const util = require("./util");

function fName(x) {
    return x*x;
}
console.log(fName(1,2,3)); 

// ES6
//const <function_name> = <params> => <return>
const ex1 = x => {
    x += 10;
    return x * x
};
console.log(ex1(6));


// Arrow Functions do not have a this pointer.
const fNameArrow = () => { 
    console.log(this);
}
fNameArrow();

//Inside an object
let obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i,this);
    }
}
// 10
console.log(obj.i);
// 100
obj.c();
//???
obj.b();

// Call back functions
// The below example is a synchronous callback,
// as it is executed immediately.

//MDN
function greeting(name) {
    console.log('Hello ' + name);
}
  
function processUserInput(callback) {
    var name = "Rhythm";
    console.log(name);
    callback(name);
}

// Hello Rhythm
processUserInput(greeting);

//W3School
let promise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)
    // may be processing an image or us it to decrypting a large hash.

    resolve(value); // when successful
    reject(error);  // when error
});
    
// "Consuming Code" (Must wait for a fulfilled Promise)
promise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
);

console.clear();

let p = new Promise(function (resolve, reject) {
    let x = 10;
    if (x == 10) {
        resolve("In then!");
    }
    else { 
        reject("In catch");
    }
});
/* 
p.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
});
*/

console.clear();

// Writing async is mandatory
async function fPromise() { 
    try {
        const val = await p;
        console.log(val);
    } catch (err) { 
        console.log("Some Error!",err);
    }
}

fPromise();
console.clear();

console.log(util);
console.log(util.add(1, 2));
console.log(util.sub(1,2));

console.clear();
let arr = [1, 2, 3, 4, 5];

const [x, y, z] = arr;
console.log(x, y, z);

let { i } = obj;
console.log(i);

//swap 2 numbers?
let a = 10, b = 30;
console.log(a, b);

[b, a] = [a, b];

console.log(a, b);

// Destructure an entire array

let arr2 = [...arr];
let [first, ...arr3] = arr;
console.log(arr3);

arr.forEach(ele => {
    console.log(ele*ele);
});

let arrMap = arr.map((ele) => { return ele * ele });
console.log(arrMap);

