// // 'use strict'
// // // strict mode is used to detact small error's in out file and show error messages for that, write "use strict" on the first line our file to apply strict mode.
// // a = 10;
// // console.log(a)

// // function add(a,a){
// //     console.log(a+a)
// // }
// // add(2,3)
// // // // // // // console.log("file connected");

// // // // // // // // types of keyword to declrare the variable
// // // // // // // // var ,let ,const  
// // // // // // // // syntax 
// // // // // // // let username = "raj";
// // // // // // // var age = 10;
// // // // // // // const price = 3000;
// // // // // // // user = "elon";
// // // // // // // console.log(username, age, price, user);




// // // // // // // // var :- globally scoped variable , 
// // // // // // // // and functional scoped ,reassignment is possible in this keyword  , redclration is also possible in this keyword

// // // // // // // var a = 30;
// // // // // // // function sum() {
// // // // // // //     var a = 10;
// // // // // // // }
// // // // // // // console.log(a)

// // // // // // // a = 45;// reassignment
// // // // // // // console.log(a);

// // // // // // // var a = 90;
// // // // // // // console.log(a)
// // // // // // // // {
// // // // // // // //     var x = 10;
// // // // // // // // }
// // // // // // // // console.log(x)

// // // // // // // let data = "hello world";
// // // // // // // // let :-this keyword is add in 2015 in es6 ,
// // // // // // // // its blocked scope variable, we can reassign its value
// // // // // // // // redclration is not possible
// // // // // // // {
// // // // // // //     let fullname = "rajesh";

// // // // // // // }
// // // // // // // console.log(data);
// // // // // // // data = "updated";///reassignment
// // // // // // // console.log(data);
// // // // // // // // let data = "new value"//it show error


// // // // // // // // const keyword 

// // // // // // // // console.log(fullname);//it shows us error;

// // // // // // // const amount = 1000;
// // // // // // // //const keyword is blocked scoped variable ,
// // // // // // // //reassignment and redeclration is not possible here

// // // // // // // // rules of varibale name declration
// // // // // // // // 1 cannot start with numerical value ,we can add numberical value after first charchter
// // // // // // // // 2 cannot use any special charchter except _ and $
// // // // // // // // 3 aslo space is not allowed between variable names
// // // // // // // //4  cannot use any reserved keyword


// // // // // // // // = assignment operator

// // // // // // // // data type
// // // // // // // // primitive and non primitive
// // // // // // // // string ,number, boolean ,null ,undefined
// // // // // // // // array ,object ,
// // // // // // // // function ,Symbol , BigInt,

// // // // // // // // scope

// // // // // // // // globally 
// // // // // // // // , blocked,
// // // // // // // //   function scope

// // // // // // // // for` (let i = 0; i <= 10; i++) {
// // // // // // // //     var innerdata = "hello";
// // // // // // // //     let innerlet = "hello let"
// // // // // // // // }
// // // // // // // // console.log(innerdata)
// // // // // // // // console.log(innerlet);
// // // // // // // // function fun() {
// // // // // // // //     var inner_var = "hello"
// // // // // // // // }
// // // // // // // // console.log(inner_var);`

// // // // // // // // let p = "10";
// // // // // // // // console.log(typeof(p));

// // // // // // // // operators  
// // // // // // // //arithmatic opoerators 
// // // // // // // // + ,- ,* ,/ , ** , %(modular);
// // // // // // let a = 10;
// // // // // // let b = 20;
// // // // // // console.log(a % b)

// // // // // // // comparison operator 
// // // // // // // <, >, <= ,>= ,== ,=== , != ,!==
// // // // // // console.log(a < b)
// // // // // // console.log(a > b)
// // // // // // console.log(a <= b)
// // // // // // console.log(a >= b);
// // // // // // console.log(10 == "10")//it compare only the values 
// // // // // // console.log(10 == "djh")//it compare only the values 
// // // // // // console.log(10 === "10")//it compare the values and also the data type 

// // // // // // // != and !==
// // // // // // console.log(10 != '10');//it only compare values
// // // // // // console.log(10 !== "10")
// // // // // // // it compare both the values and data type

// // // // // // //asignment operator 
// // // // // // // = , += ,-= , *= , /= , **= , %= ,++ ,--
// // // // // // let p = 10;
// // // // // // // p = p +20
// // // // // // p += 20
// // // // // // console.log(p)
// // // // // // p -= 20;

// // // // // // console.log(p)
// // // // // // p *= 10;
// // // // // // console.log(p)
// // // // // // p /= 10;
// // // // // // console.log(p)
// // // // // // p **= 2;
// // // // // // console.log(p)

// // // // // // let x = 10;
// // // // // // //increment ++ , 
// // // // // // // pre increment , first increase then print
// // // // // // // post increment // first print then increase
// // // // // // console.log(x);
// // // // // // x++
// // // // // // console.log(x);
// // // // // // x++
// // // // // // console.log(x);
// // // // // // x++

// // // // // // // console.log(x++ );
// // // // // // console.log(x);

// // // // // // // decrement 
// // // // // // let y = 10;
// // // // // // // y-- 
// // // // // // console.log(y--, y);

// // // // // // // logical operator
// // // // // // // &&  ,|| ,! 
// // // // // // console.log(true && true)//true 
// // // // // // console.log(true && false)// false 
// // // // // // console.log(false && true)//false 
// // // // // // console.log(false && false) //false
// // // // // // console.log(true && "hello world");
// // // // // // console.log(false && "hello world");

// // // // // // // or || operator
// // // // // // console.log(true || true) //true 
// // // // // // console.log(true || false)//true 
// // // // // // console.log(false || true)//true
// // // // // // console.log(false || false) //false
// // // // // // console.log(true || "hello world");
// // // // // // console.log(false || "hello world");


// // // // // // // ! not operator  
// // // // // // console.log(!true) ///false 
// // // // // // console.log(!false) ///true


// // // // // // // type conversion 
// // // // // // // type corison
// // // // // // console.log(10 + '10');
// // // // // // console.log(10 - "10");
// // // // // // console.log(10 * "10");

// // // // // // // Number ,Boolean ,String
// // // // // // console.log(Number("10"))
// // // // // // console.log(Number("sdkj"))

// // // // // // console.log(Boolean("hi"));
// // // // // // console.log(Boolean(""));
// // // // // // console.log(Boolean(0));
// // // // // // console.log(Boolean(1));
// // // // // // console.log(Boolean(null));
// // // // // // console.log(Boolean(undefined));
// // // // // // console.log(Boolean([]));
// // // // // // console.log(Boolean({}));

// // // // // // // String
// // // // // // console.log(String(109));

// // // // // // // Math Object 
// // // // // // console.log(Math.random());
// // // // // // console.log(Math.round(4.6));
// // // // // // console.log(Math.floor(4.5))
// // // // // // console.log(Math.max(2, 3, 4, 4, 44, 32));
// // // // // // console.log(Math.min(2, 3, 4, 4, 44, 32));
// // // // // // console.log(Math.pow(2, 3));
// // // // // // console.log(Math.sqrt(144));
// // // // // // console.log(Math.abs(-10));

// // // // // // // string 

// // // // // // let str = 'javascript';
// // // // // // //length method 
// // // // // // console.log(str.length)

// // // // // // // charAt
// // // // // // console.log(str.charAt(0));
// // // // // // //find any charchter using their index 
// // // // // // // 
// // // // // // console.log(str.charCodeAt(1));//it give us asscci code of the given index charchter

// // // // // // console.log(str.indexOf("a"))
// // // // // // console.log(str.lastIndexOf("a"))

// // // // // // console.log(str.startsWith("java"));
// // // // // // console.log(str.endsWith("script"));

// // // // // // console.log(str.includes("a"))

// // // // // // // console.log(str.replace("a","l"))
// // // // // // console.log(str.replaceAll("a", "l"));
// // // // // // console.log(str.toLowerCase())
// // // // // // console.log(str.toUpperCase());
// // // // // // //it remove the extra space from start and end
// // // // // // console.log(str.trim());
// // // // // // console.log(str.trimStart());
// // // // // // console.log(str.trimEnd());

// // // // // // console.log(String.fromCharCode(90, 66, 77));





// // // // // // //14 oct
// // // // // // //if, if-else, switch, ternary operator Lab: Age Eligibility Checker (Task 5);
// // // // // // // after it complete :-for, while, do-while, Nested Loops

// // // // // let data = "text";
// // // // // data = "hello this is your first class";
// // // // // console.log(data.padEnd(16, "p"))
// // // // // console.log(data.padStart(16, "p"))
// // // // // console.log(data.padStart(5));
// // // // // console.log(data.split("i"))//it convert the string into an array ,dividing all the  values by the given argument and delete the argument

// // // // // // ternary operator
// // // // // //to wirting single line condition .
// // // // // // syntax  := condition ? trueblock : false block ;
// // // // // console.log(true ? "hello" : "not found");

// // // // // // conditionals :
// // // // // // if ,if else  , else if ladder ,  nested if 
// // // // // let condition = !true;

// // // // // if (condition) {
// // // // //     console.log("condition is true ")
// // // // // }

// // // // // // if else  
// // // // // if (condition) {
// // // // //     console.log("condition is true ")
// // // // // } else {
// // // // //     console.log("condition is false")
// // // // // }
// // // // // let num = -10;
// // // // // if (num > 0) {
// // // // //     console.log(num)
// // // // // } else {
// // // // //     console.log(-num)
// // // // // }

// // // // // // else if ladder  
// // // // // if (!true) {
// // // // //     console.log("condition first is true")
// // // // // } else if (!true) {
// // // // //     console.log("condition second is true")
// // // // // } else if (!true) {
// // // // //     console.log('condition third is true')
// // // // // } else {
// // // // //     console.log("all conditions are false")
// // // // // }

// // // // // let a = 10;
// // // // // let b = 20;
// // // // // let c = 30;
// // // // // if (a > b && a > c) {
// // // // //     console.log("a is greater than b and c");
// // // // // } else if (b > a && b > c) {
// // // // //     console.log("b is greater than a and c");
// // // // // } else if (c > a && c > b) {
// // // // //     console.log("c is greater than a and b");
// // // // // } else {
// // // // //     console.log('all are equal');
// // // // // }

// // // // // //nested if
// // // // // if (true) {
// // // // //     if (true) {
// // // // //         if (true) {
// // // // //             console.log("all conditions are true")
// // // // //         } else {
// // // // //             console.log("third condition is false")
// // // // //         }
// // // // //     } else {
// // // // //         console.log("second condition is false")
// // // // //     }
// // // // // } else {
// // // // //     console.log("first condition is false")
// // // // // }
// // // // // let age = prompt("enter your age");
// // // // // console.log(age, typeof (age));
// // // // // if (age >= 18) {
// // // // //     let nationality = prompt("enter your nationality");
// // // // //     if (nationality == "indian") {
// // // // //         let crime = confirm("are you a criminal or not");
// // // // //         if (crime == false) {
// // // // //             console.log("able to fight election")
// // // // //         } else {
// // // // //             console.log("not able to fight")
// // // // //         }
// // // // //     } else {
// // // // //         console.log("nationality is not indian")
// // // // //     }
// // // // // } else {
// // // // //     console.log("age is lower than 18")
// // // // // }

// // // // // // 16 oct topics
// // // // // // switch, for, while, do-while, Nested Loops
// // // // // // Function Declaration, Expression, Arrow Functions, Scope

// // // // //switch case 
// // // // let statement = "value2";
// // // // switch (statement) {
// // // //     case "value1": console.log("value1 is correct")
// // // //     case "value2": console.log("value2 is correct")
// // // //     case "value3": console.log("value3 is correct")
// // // //     default: console.log("nothing is true")
// // // // }
// // // // //switch case 
// // // // let day = "tuesday";
// // // // switch (true) {
// // // //     case 10 == 12: console.log("today is monday"); break
// // // //     case 10 == 10: console.log("today is tuesday"); break
// // // //     case "wednesday": console.log("today is wednesday"); break
// // // //     default: console.log("nothing is true")
// // // // }

// // // // //loop :- type of loop
// // // // // for ,while  ,do while  

// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log("hello world", i);
// // // // }

// // // // // print 10 to 1 counting ,by using loop
// // // // // but the loop is running in incremental flow 
// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log("hello world", 11 - i);
// // // // }

// // // // // find the sum of all the numbers btw 1 to 100;
// // // // let sum = 0;
// // // // for (let i = 1; i <= 100; i++) {
// // // //     sum += i;
// // // // }
// // // // console.log(sum)


// // // // // facotrial
// // // // let a = 8;
// // // // let fac = 1;
// // // // for (let i = 1; i <= a; i++) {
// // // //     fac *= i
// // // // }
// // // // console.log(fac)

// // // // for (let i = 1; i <= 10; i++) {
// // // //     if (i == 5) {
// // // //         continue;
// // // //     }
// // // //     console.log("hello world", i);
// // // // }


// // // // // nested loop 
// // // // // for(let i =1; i<=5;i++){
// // // // //     for(let j=1; j<=5;j++){
// // // // //         document.write(i ,j , "<br>" )
// // // // //     }
// // // // // }
// // // // for (let i = 1; i <= 5; i++) {
// // // //     let output = ""
// // // //     for (let j = 1; j <= i; j++) {
// // // //         output += j;
// // // //     }
// // // //     console.log(output)
// // // // }
// // // // for (let i = 1; i <= 5; i++) {
// // // //     for (let j = 1; j <= i; j++) {
// // // //         document.write(j);
// // // //     }
// // // //     document.write("<br>")
// // // // }

// // // // // 54321
// // // // // 4321
// // // // // 321
// // // // // 21
// // // // // 1

// // // // for (let i = 1; i <= 5; i++) {
// // // //     for (let j = 6 - i; j >= 1; j--) {
// // // //         document.write(j);
// // // //     }
// // // //     document.write("<br>")
// // // // }
// // // // document.write("&nbsp;")
// // // // //     *
// // // // //    **
// // // // //   ***
// // // // //  ****
// // // // // *****
// // // // document.write("<br>")
// // // // for (let i = 1; i <= 5; i++) {
// // // //     for (let j = 5; j >= 1; j--) {
// // // //         if (j > i) {
// // // //             document.write(" &nbsp;&nbsp;")
// // // //         } else {
// // // //             document.write(" *");
// // // //         }
// // // //     }
// // // //     document.write("<br>")
// // // // }
// // // // // 1
// // // // // 12
// // // // // 123
// // // // // 1234
// // // // // 12345

// // // // // 21 oct 
// // // // // while, do-while, Nested Loops
// // // // // Function Declaration, Expression, Arrow Functions, Scope

// // // // //while loop 

// // // // // *********
// // // // // *       *
// // // // // *       *
// // // // // *       *
// // // // // *       *
// // // // // *       *
// // // // // *       *
// // // // // *       *
// // // // // *********
// // // // for (let i = 1; i <= 9; i++) {
// // // //     for (let j = 1; j <= 9; j++) {
// // // //         document.write("(", i, ",", j, ")");
// // // //     }
// // // //     document.write("<br>");
// // // // }

// // // // for (let i = 1; i <= 9; i++) {
// // // //     for (let j = 1; j <= 9; j++) {
// // // //         if (i == 1 || i == 9 || j == 1 || j == 9) {
// // // //             document.write("*");
// // // //         } else {
// // // //             document.write("&nbsp;&nbsp;");
// // // //         }
// // // //     }
// // // //     document.write("<br>");
// // // // }
// // // // // right angle triangle
// // // // for (let i = 1; i <= 9; i++) {
// // // //     for (let j = 1; j <= 9; j++) {
// // // //         if (i == 9 || j == 1 || j == i) {
// // // //             document.write("*");
// // // //         } else {
// // // //             document.write("&nbsp;&nbsp;");
// // // //         }
// // // //     }
// // // //     document.write("<br>");
// // // // }

// // // // // while loop 
// // // // let i = 1;
// // // // while (i <= 10) {
// // // //     console.log(i);
// // // //     i++;
// // // // }


// // // // let x = 10;
// // // // while (x) {
// // // //     console.log(x);
// // // //     x--;
// // // // }

// // // // // 34567
// // // // let num = 121;
// // // // let newnum = num;
// // // // let rev = 0;

// // // // while (num) {
// // // //     let temp = num % 10;
// // // //     rev = rev * 10 + temp;//321
// // // //     num = Math.floor(num / 10);
// // // // }
// // // // console.log(newnum, rev)
// // // // if (newnum == rev) {
// // // //     console.log("num is palindrome")
// // // // }
// // // // // palindrome number , take a number input check wheather it is palindrome number or not.

// // // // //do while loop
// // // // let y = 1;
// // // // do {
// // // //     console.log(y);
// // // //     y++;
// // // // } while (y == 10);

// // // // //function: is a resuable block of code , which is used to reuse the functionality and logics multiple times in our file. it will only execute when we call it using its name with parenthesis.
// // // function message() {
// // //     console.log("normal function with no  parameters")
// // // }
// // // message();
// // // function sum(p1, p2, p3) {//parameters 
// // //     // code block
// // //     console.log("sum function", p1 + p2, p3)
// // // }
// // // sum(1, 2);//arguments
// // // sum(44, 66);
// // // sum(22, 77);
// // // sum(12, 34);

// // // function data() {
// // //     return "hello world";
// // //     console.log("last line");
// // // }
// // // data();
// // // console.log(data());
// // // // document.write(data())
// // // // alert(data());
// // // // let response =  data();
// // // // console.log(response);

// // // // function expression 
// // // let fun = function () {
// // //     console.log("fun function")
// // // }
// // // fun();

// // // // default parameter:- default parameter value is only applied when you missed any argument.
// // // function run(a = 0, b = 0) {
// // //     console.log(a, b)
// // // }
// // // run(1, 3);


// // // // callback function 
// // // function main(fn) {
// // //     console.log("main function code")
// // //     console.log("main function code")
// // //     console.log("main function code");
// // //     fn();
// // // }

// // // function callback() {
// // //     console.log("this is callbakck function")
// // // }
// // // main(callback);

// // // // find prime number using fun 
// // // function findprime(num) {
// // //     let result;
// // //     for (let i = 2; i < num; i++) {
// // //         if (num % i == 0) {
// // //             result = "notprime";
// // //             break;
// // //         } else {
// // //             result = "prime"
// // //         }
// // //     }
// // //     if (result == "prime") {
// // //         return true
// // //     }
// // //     return false;
// // // }
// // // for (let i = 2; i <= 100; i++) {
// // //     if (findprime(i)) {
// // //         console.log(i, " is prime number")
// // //     }
// // // }

// // // // 23 oct (topics )
// // // // Arrow Functions, Scope ,Closures, IIFE, Hoisting, Strict Mode, 
// // // // Array and Methods, map(), filter(), reduce(), forEach()

// // // // Arrow function :- arrow function :- it have a minimal sytanx and we can declare function without using function keyword. this syntax is added in 2015 in ES6 update of javascript.arrow function doesn't have its own this and also the arguments.
// // // // syntax = ()=>{};
// // // let arrowfun = () => { console.log("this is arrow function") };
// // // let arrowfun = () => "this is arrow function";
// // let arrowfun = () => { return "this is arrow function" };

// // console.log(arrowfun());

// // // arrow function doesnot contain argument keyword;
// // function fun() {
// //     console.log(arguments)
// // }
// // fun(33, 4, 4, 55);

// // let run = () => {
// //     // console.log(arguments)
// // }
// // run(9, 93, 2, 2);


// // // IIFE =Immediatly invoked function expression 
// // (
// //     function () {
// //         console.log("this is IFFE function")
// //     }
// // )();

// // //closure function :- closure function have access of the parent function variables after the execution of parent function is finished.
// // //closure function 
// // function main() {
// //     let count = 0;
// //     return function () {
// //         count++
// //         return count;
// //     }
// // }
// // let newfun = main();
// // console.log(newfun());
// // console.log(newfun());



// // // // function main() {
// // // //     let count = 0;
// // // //     return function () {
// // // //         count++;
// // // //         console.log(count);
// // // //         return count ;
// // // //     }
// // // // }
// // // // let output = main();
// // // // console.log(output)
// // // // output();
// // // // output();
// // // // // // output();
// // // // // // output();
// // // // console.log("count", output())

// // // // // Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program's execution.


// // // strict mode ,hoisting in functions
// // hoisting move the declration of the function to the top of the file ,so we can access if before the declration .
// // //
// sum(19, 9);
// function sum(a, b) {
//     console.log(a + b)
// }

// // // Array and its Methods 
// // array is a collection of similiar type of elements in a single varibale inside the square brackets . and the elements are stored in incremental indexs form ,index are start from 0 .
// let ar = [33, 44, 55, 22, 5, 33];
// console.log(ar);
// document.write(ar, "<br>");
// document.write(ar[0]);
// console.log(ar[0])

// ar[3] = 99;
// console.log(ar.length); //6
// ar[10] = 99;
// console.log(ar);

// // methods // length method 
// console.log(ar.length); //11

// //at() : take index and find the element present on it.
// console.log(ar.at(30));//it print undefined when the given index is not available , and the index is avilable it print the value .

// //concat :- use to merge two arrays 
// console.log(ar)
// let newar = [66, 55, 44, 4, 3];
// console.log(ar.concat(newar));

// //delete method :- use to replace the element with empty.
// console.log(ar)
// delete ar[3];
// console.log(ar);

// //reverse method:- used to reverse the array.
// ar = [1, 2, 3, 4, 5];
// // console.log(ar.reverse());//parmanently changed the array
// let reversed = []
// for (let i = ar.length - 1; i >= 0; i--) {
//     reversed[ar.length - 1 - i] = ar[i];
// }
// console.log(ar, reversed);


// // sort method :- used to sort the array .
// let names = ["raj", "aman", "john", "harry", "anuj"];
// console.log(names.sort());
// //['aman', 'anuj', 'harry', 'john', 'raj']

// let marks = [112, 45, 78, 45, 1, 12, 32];
// console.log(marks.sort((a, b) => { return a - b })); //acending sort 
// console.log(marks.sort((a, b) => { return b - a }));//decending sort
// // we have to use callback function 

// /// push , pop , shift , unshift
// // push used to  insert elements form the last index , we can insert multiple  elements at once , 
// // pop  used to delete elements form the last index, it will delete one element at a time.
// ar.push(1, 2, 3,);
// console.log(ar);

// ar.pop();
// ar.pop();
// console.log(ar);

// //  26 oct topics 
// // Array Methods, map(), filter(), reduce(), forEach()
// // Mouse Events, Keyboard Events, Form Events

ar = [1, 2, 3, 4, 5, 6, 7];
//shift . unshift method :
// unshift  used to add elements from starting index , we can add multiple elements at a time .
//  shift  ,delete elements from starting index, one element at a time.

ar.unshift(88, 77, 66);
console.log(ar);

console.log(ar.shift())
console.log(ar);

// slice , splice 
// slice :-  used to create a copy of array by taking starting and ending index+1;
let newar = ar.slice(0, 4)//0-3 index 
console.log(newar);
//splice used to ,insert element, delete element , and replace element,  splice take three arguments, 
// splice(startingindex ,deletecount , insertvalue);
//remove element ,
ar.splice(3, 1);
//insert element 
ar.splice(4, 0, 55, 66, 77);
// replace elements
ar.splice(2, 1, 77);
console.log(ar);
// find , filter 
// find method take an callback function as an argument and using that function it will find an element which fullfilled the return condition.
console.log(ar.find((a) => {
    return a <= 44
}));

console.log(ar.filter((a) => {
    return a <= 44
}));

// find all the even numbers from this array without using filter method  and print in an array.
let array = [44, 3, 4, 2, 5, 67, 7, 4];
let output = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        output[output.length] = array[i];
    }
}
console.log(output);

// for in and for of loop 
for (let i in array) { //i variable takes the index of the elements
    console.log(i, array[i]);
}
for (let i of array) {// i takes directly the values.
    console.log(i);
}
//map , reduce method 
//map method used to map the elements of the array, we can print the elements sepratly and also modified it using the map method and return an new array with modified values .
let f = array.map((value, index) => {
    console.log(index, value);
    return value * 8;
})
console.log(f);
let k = [43, 5, 3, 5, 3, 5, 34];
// create a new array with same values but every values should multiply with 8 .
let newk = [];
for (let i in k) {
    newk[i] = k[i] * 8;
}
console.log(newk);

//reduce :- this method reduce the array in single output,  it take two arguments,first is callback function and inside the callback function it take 2 parameters ,first is accumulator , second is current value ,and second is accumulator value
let p = [1, 2, 3, 4, 5]
console.log(p.reduce((a, b) => {
    return a + b ;
}, 9));

//indexOf ,  includes
console.log(p.indexOf(5));
//it print the index when the element is available and print -1 when the element is not available.

console.log(p.includes(5))//boolean 
// console.log( p.fill(0));
console.log( p.fill(0,1,4));//fillvalue , startindex,endindex+1 
//flat method :- it take argument to flat the array , give the dimension.
let x = [1,2,3 ,[1,2,[3,4]]];
console.log(x.flat(2));

//join :- join the array with the given value;
console.log(k.join("hello"));

//
let a = [5,3,6,3,63,2,5,6,2];
//task :- sort the array in accending order without using sort method of array .
// find the largest element of the array;
for(let i=0; i<a.length ; i++){
  for(let j=i+1; j<a.length; j++){
    if(a[i] > a[j]){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
  }
}
console.log(a);
















