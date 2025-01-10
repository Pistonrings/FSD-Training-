// (Specific)

// function demo() {
//     console.log("hello");
// }

// demo();

// ------ anonymous function -------

// function() {
//     console.log("hello");
// }

// ------ function expression -------

// let a = function() {
//     console.log("hello");
// }

// console.log(a);
// a();

// --------- Task 1 --------
// create a function expression to perform arithmentic operation for
// 3 numbers and find largest of three numbers and input from end user

let largest = function (a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    console.log("Addition:");
    console.log(a + b + c);
    console.log("Subtraction");
    console.log(a - b - c);
    console.log("Multiplication:");
    console.log(a * b * c);

    if (a >= b && a >= c) {
        console.log(a, " is largest");
    }
    else if (b >= a && b >= c) {
        console.log(a, " is largest");
    }
    else {
        console.log(a, " is largest");
    }
}

console.log("Largest number is: ");
console.log(largest(prompt("First number:"), prompt("Second number:"), prompt("Third number:")));

// -------- Task 2 ---------
// let x = function(p) {
//     console.log(p);
// }
// x(10, 20, 30);
// need to print 10 20 and also 30 -> the provided code only gives 10

let x = function(p) { // arguments store in array - in argument object
    console.log(p); // 10
    console.log(arguments); // Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments[1]); // 20
}
x(10, 20, 30);


// (generic - multiple task)

// -------- function programming ---------
// ● Higher order function  
// ● Call back function

// here "main" is higher order fuction as one fuction performing multiple task/functionality
function main(a) {
    console.log("I am higher order function")
    console.log(a);
}

main( function() { 
    return "I am call back function 1";
} );

main( function() { 
    return "I am call back function 2";
} )

