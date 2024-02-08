// Number Method

// Return Number As A String //

// let x = 123;
// console.log(x);       //123
// console.log(x.toString());   //123
// console.log((100 + 23).toString());  //123



// let x = 9.656;

// console.log(x.toExponential());    //9.656e+0
// console.log(x.toExponential(2));   //6.66e+0
// console.log(x.toExponential(4));   //9.6560e+0
// console.log(x.toExponential(6));   //9.656000e+0



//REturn a Number Written With a Number of decimal fixed //
// let data = 9.656;

// console.log(data.toFixed());     // 10
// console.log(data.toFixed(2));    // 9.66
// console.log(data.toFixed(4));    // 9.6560
// console.log(data.toFixed(6));    //9.656000



//return a Number wrutten with specified length //
// let data = 9.656;

// console.log(data.toPrecision());   //9.656
// console.log(data.toPrecision(2));  //9.6
// console.log(data.toPrecision(4));  //9.6560
// console.log(data.toPrecision(6));  //9.65600


//Returns As a Number //
// let data= 123;

// console.log(data.valueOf());
// consolog((123).valueOf());
// console.log((100+23).valueOf());




// ||converting Variable to Number || //

// Returns A number converted From Argument

// console.log(Number(true));   // 1
// console.log(Number(false));  // 0
// console.log(Number("10"));   // 10
// console.log(Number(" 20"));  // 20
// console.log(Number("30 "));   // 30
// console.log(Number("25.33 "));  //25.33
// console.log(Number("22,33 "));  //NaN
// console.log(Number("10 33 "));  //NaN
// console.log(Number("john"));    //NaN


// parsFloat() its argument and returns a floating point Number

// console.log(parseFloat("10"));    //10
// console.log(parseFloat("10.33"));    //10.33
// console.log(parseFloat("10 20 30"));  //10
// console.log(parseFloat("10 year"));  //10
// console.log(parseFloat("year 10"));  //NaN


// parsint() its Argument and return a whole Number

// console.log(parseInt("-10"));     //-10
// console.log(parseInt("-10.33"));  //-10
// console.log(parseInt("20"));     //20
// console.log(parseInt("25.33"));  //25.33
// console.log(parseInt("28 20 30"));  //28
// console.log(parseInt("35 yrar"));  //35
// console.log(parseInt("yrar 45"));  //NaN




// Number Object Method

// console.log(Number.isInteger(10))   //true
// console.log(Number.isInteger(10.5))   //Fales

// console.log(Number.isSafeInteger(20)) //true
// console.log(Number.isSafeInteger(12345879644478552144555)) //true

// console.log(Number.parseFloat("10"));   //10
// console.log(Number.parseFloat("20.33"));    //20.33
// console.log(Number.parseFloat("30 40 50"));  //30 
// console.log(Number.parseFloat("40 year"));   //40
// console.log(Number.parseFloat("year 50"));   //NaN

// console.log(Number.parseInt("-10"));      //-10
// console.log(Number.parseInt("-10.33"));   //-10
// console.log(Number.parseInt("10"));       //10
// console.log(Number.parseInt("10.33"));    //10
// console.log(Number.parseInt("20 6"));    //20
 console.log(Number.parseInt("20 year"));    //20
 console.log(Number.parseInt("year  30"));    //NaN