// JavaScript "Use strict"

//In javascript, 'use strict'; states that the code should be executes in 'strict mode'.This make it easier
//to write good and secure js code.

// 'use strict'

{
    //myVariable =9;
    // console.log(myVariable);
}

//Here, myVariable is created without declaring.This works as a global variable in javascript.Howver'
//if you use this in strict code,the program will throw an errr.

//strict Mode in Variable

//int strict mode, using a variable without declaring it throws an error.
{
    // console.log("some code");
    // //'use strict' is ignored
    // "use strict";
    // x = 21; //does not throw an error
    // console.log(x);
}

//strict Mode in Function
//You can also use strict mode inside a function.

{
    // myVariable = 9;
    // console.log(myVariable); //9

    // function hello(){
    //     //applicable only for this function
    //     'use strict';
    //     let string = 'hello'; //throw an error
    // }
    // hello();
}

//if you use 'use strict'; inside a function , the code inside the function will be in strict mode.
{
    // function hello() {
    //     string = 'hello'; //throws an error
    // }
    // hello();
    // //Note: Strict mode doesn't apply to block statment with {} braces.
}

//Things Not Allowed in strict Mode

//1.Undeclared variable is not allowed.
{
    // 'use strict';

    // a = 'hello'; // throws an error
}

//2.Undeclared oblect are not allowed.
{
    //'use strict';
    //person = {name: 'carla', age: 25}; //throws an error
}

//3.Deleting an object is not allowed.
{
    // 'use strict';

    // let person = { name: 'carla' };

    // delete person; //throw an error
}

//4.Duplicating a parameter name is not allowed.
{
    // "use strict";

    // function hello(p1, p2) { console.log('hello') }; //throw an error

    // hello();
}

//5.Assigning to a non-writable property is not allowed.
{
    // 'use strict';

    // let obj1 = {};

    // oblect.defineProperty(obj1, 'x', { value: 42, writable: false });

    // //assignment to a non-writable property
    // obj1.x = 9; //throw an error
}

//6. Assigning to a getter-only property is not alllowed.
{
    //'use strict';

    //let obj2 = { get x() { return 17; } };
   // //assignment to a getter- only property
   // obj2.x = 5; //thorow an error

}

//7.Assigning to a new property on non-extensible object is not allowed.
{
    //'use strict';
    //let obj = {};
    //Object.preventExtensions(obj);
    // //Assignment to new property on a non-extensible object
    //obj,newValue = 'new value'; //throw an error

}

//8.octal syntax is not allowed.
{
    //'use strict';

    //let a = 010; //throw an error
}

//9.The variable name argumnet and eval are not allowed.
{
    //'use strict';
    
    //let argumnet = 'hello'; //throw an error

    //let eval = 44;
}

//10.You can not also use these reserved keyword in strict mode

//implement interface let package private protected public static yield

//benefits of strict Mode'

//helps to Write a cleaner code
//changes previously accepted silent error(bad syntax)into real error and throws an error message
//makes it easier to write "secure" Javacript