// console.log("file connected");

// // types of keyword to declrare the variable
// // var ,let ,const  
// // syntax 
// let username = "raj";
// var age = 10;
// const price = 3000;
// user = "elon";
// console.log(username, age, price, user);


// // var :- globally scoped variable , 
// // and functional scoped ,reassignment is possible in this keyword  , redclration is also possible in this keyword

// var a = 30;
// function sum() {
//     var a = 10;
// }
// console.log(a)

// a = 45;// reassignment
// console.log(a);

// var a = 90;
// console.log(a)
// // {
// //     var x = 10;
// // }
// // console.log(x)

// let data = "hello world";
// // let :-this keyword is add in 2015 in es6 ,
// // its blocked scope variable, we can reassign its value
// // redclration is not possible
// {
//     let fullname = "rajesh";

// }
// console.log(data);
// data = "updated";///reassignment
// console.log(data);
// // let data = "new value"//it show error


// // const keyword 

// // console.log(fullname);//it shows us error;

// const amount = 1000;
// //const keyword is blocked scoped variable ,
// //reassignment and redeclration is not possible here

// // rules of varibale name declration
// // 1 cannot start with numerical value ,we can add numberical value after first charchter
// // 2 cannot use any special charchter except _ and $
// // 3 aslo space is not allowed between variable names
// //4  cannot use any reserved keyword


// // = assignment operator

// // data type
// // primitive and non primitive
// // string ,number, boolean ,null ,undefined
// // array ,object ,
// // function ,Symbol , BigInt,

// // scope

// // globally 
// // , blocked,
// //   function scope

// // for` (let i = 0; i <= 10; i++) {
// //     var innerdata = "hello";
// //     let innerlet = "hello let"
// // }
// // console.log(innerdata)
// // console.log(innerlet);
// // function fun() {
// //     var inner_var = "hello"
// // }
// // console.log(inner_var);`

// // let p = "10";
// // console.log(typeof(p));

// // operators  
// //arithmatic opoerators 
// // + ,- ,* ,/ , ** , %(modular);
let a = 10;
let b = 20;
console.log(a % b)

// comparison operator 
// <, >, <= ,>= ,== ,=== , != ,!==
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b);
console.log(10 == "10")//it compare only the values 
console.log(10 == "djh")//it compare only the values 
console.log(10 === "10")//it compare the values and also the data type 

// != and !==
console.log(10 != '10');//it only compare values
console.log(10 !== "10")
// it compare both the values and data type

//asignment operator 
// = , += ,-= , *= , /= , **= , %= ,++ ,--
let p = 10;
// p = p +20
p += 20
console.log(p)
p -= 20;

console.log(p)
p *= 10;
console.log(p)
p /= 10;
console.log(p)
p **= 2;
console.log(p)

let x = 10;
//increment ++ , 
// pre increment , first increase then print
// post increment // first print then increase
console.log(x);
x++
console.log(x);
x++
console.log(x);
x++

// console.log(x++ );
console.log(x);

// decrement 
let y = 10;
// y-- 
console.log(y--, y);

// logical operator
// &&  ,|| ,! 
console.log(true && true)//true 
console.log(true && false)// false 
console.log(false && true)//false 
console.log(false && false) //false
console.log(true && "hello world");
console.log(false && "hello world");

// or || operator
console.log(true || true) //true 
console.log(true || false)//true 
console.log(false || true)//true
console.log(false || false) //false
console.log(true || "hello world");
console.log(false || "hello world");


// ! not operator  
console.log(!true) ///false 
console.log(!false) ///true


// type conversion 
// type corison
console.log(10 + '10');
console.log(10 - "10");
console.log(10 * "10");

// Number ,Boolean ,String
console.log(Number("10"))
console.log(Number("sdkj"))

console.log(Boolean("hi"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

// String
console.log(String(109));

// Math Object 
console.log(Math.random());
console.log(Math.round(4.6));
console.log(Math.floor(4.5))
console.log(Math.max(2, 3, 4, 4, 44, 32));
console.log(Math.min(2, 3, 4, 4, 44, 32));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(144));
console.log(Math.abs(-10));

// string 

let str = 'javascript';
//length method 
console.log(str.length)

// charAt
console.log(str.charAt(0));
//find any charchter using their index 
// 
console.log(str.charCodeAt(1));//it give us asscci code of the given index charchter

console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))

console.log(str.startsWith("java"));
console.log(str.endsWith("script"));

console.log(str.includes("a"))

// console.log(str.replace("a","l"))
console.log(str.replaceAll("a", "l"));
console.log(str.toLowerCase())
console.log(str.toUpperCase());
//it remove the extra space from start and end
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(String.fromCharCode(90, 66, 77));

