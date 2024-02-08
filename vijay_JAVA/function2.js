// self invoking Function //

// (function() {
//     let x = "Hello I called Myself IIFE ";
//     console.log(x);
// })();


//Function Constructor //

// const myfunction = new Function("a", "b", "return a*b");
// let x = myfunction(5, 5);
// console.log(x);




//Arrow Function //

//ES 5
// let x = function (x, y)
// {
//     return x * y;
// }

// console.log(x(4, 5));


//ES6
// const x = (x, y) => x * y;
// consolg..log (x(6, 6));



//Function are Object //

// function myfunction(a, b, c)
// {
//     return arguments.length;
// }
// let text = myfunction(4, 3, 6);    // total number of Argument is 3
// console.log(text);


// function myfunction(a,b)
// {
//     return a * b;
// }

// let text = myfunction(4,5).toString();
// console.log(text);




//Function Rest Parameter //

// function sum(...args)
// {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }
// let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(x);


//Argument Object //

// x = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9 );
// function sumAll()
// {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++)
//     {
//         sum =sum + arguments[i];    
//     }
//     return sum;
// }
// console.log(x);
