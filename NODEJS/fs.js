const fs = require("fs");

// const {add, product} = require("/.basic.js");
// const {product} = require('./basic.js');

// console.log(add(5,3));

// synchronously and Asychronously Method

// Asynchronous Method
// fs.open('abc.txt',(err,data)=>{
//     if(err){
//         console.log('Failed to open File');
//     }
//     else
//         console.log('File opened successfully');
    
// })

//Synchronous Method
// fs.openSync('abc.txt');
// console.log('File opened successfully');


//Read Method

// let t1 = performance.now();
// console.log('Product is: ',product(5,3));

// fs.readFile('abc.txt','utf-8',(err,data)=>{
//  if(err)
//     console.log('Failed to Read File');
//  else
//     console.log(data);   
// });

// let data = fs.readFileSync('abc.txt','utf-8');
// console.log(data);
// console.log('Addition is: ',add(15,13));
// let t2 = performance.now();
// console.log('Time Difference is: ',t2-t1);





// Write Method
// let txt = `#include <stdio.h>
// int main(){
//     // printf("Welcome  to skillQode");
//     printf("Learning NodeJs");
// }`;

// fs.writeFile("basic.c",txt,(err,data)=>{
//     if(err)
//     console.log("Failed to Wrire File");
//     else
//     console.log("File Written succesfully");
// });


// fs.writeFileSync("hello.c",txt);
// console.log("File Written Succesfully");



//Append Mrthod

// let txt = `Good Morning`;
// fs.appendFile("basic.c",txt,(err, data) => {
//    if(err)
//     console.log("Failed to write File");
//    else
//     console.log("File Append Succesfully");
//    });



//Close File
// fs.close(2,(err) => {
//     if(err)
//     console.log("Faile to close File");
//     else
//     console.log("File Closed Succesfully");
// })