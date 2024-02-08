//Array

// let data = [11, 22, 33, 44];
// // let data = ["world","Hello",11,22,true,99]
// console.log(data);
// console.log(data.length);


//Array Method

// || Push => insert elemnt in Last Position ||

// let data = [11, 22, 33, 44, 55, 66, 77];
// console.log(data);
// data.push(88, 99);
// data.push("kiwi", "apple");
// console.log(data);


// || Pop => Delete element in Last Position  ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.pop();
// data.pop();
// console.log(data);

// || Unshift => insert Elment in First position ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.unshift(101, 202);
// console.log(data);



//  || shift => Delete Elment in First position ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.shift();
// data.shift();
// console.log(data);



//     || Changing Element ||

// let data = [11, 22, "Apple", 33, 44, "Banana"];
// console.log(data);
// data[1] = "Mango";
// console.log(data);



//    || Merge=> Merge 2 or More Array ||

// let data = [11, 22, 33, 44, 55];
// console.log(data);
// console.log((data.concat(205,206)))


// let data = [11, 22, 33, 44];
// let fruits = ["banan", "Mango", "Apple"];
// let subjet = ["GUJ", "MATH", "SCI"];
// let all = data.concat(fruits,subjet);
// console.log(all);


//   || Array Splice  ||
// splice(Staring Point, Rempove Element Number, Add New Elemnt)

// let data = ["Banana", "Mango", "Orang", "Apple", 22, 33, 44];
// console.log(data);
// data.splice(2, 3);
// console.log(data);

// data.splice(1, 0, "Pineple", "kiwi");
// console.log(data);

// data.splice(1, 2, "Pineple", "kiwi");
// console.log(data);


//    ||Array Slice ||

// let data = [11, 22, 33, 44, 55, 66, 77];
// console.log(data);
// console.log((data.slice(2, 6)));
// console.log(data.slice(2));


//  ||Array Sort ||

// let data = ["Banana", "Kiwi", "Orang", "Mngo", "Lemon"]
// data.sort();
// console.log(data.sort());


//  || Numeric Sort ||

// let data = [90, 44, 5, 45, 25, 6, 29, 95];
// data.sort((a, b) => a - b );
// console.log(data);


//  || Array Reverse  ||
// let data = [11, 22, "Orange", "Apple", 66];
// // data.sort();
// data.reverse();
// console.log(data);




//   || ARRAY MAX  ||

// let data = [11, 22, 33, 44, 55, 66, 77, 88,];

// MaxNum = (a) => {
//     return Math.max.apply(null, a)
// };
// console.log(MaxNum(data));



//   || ARRAY MIN  ||
// let data = [11, 22, 33, 1, 99, 44, 55, 66, 77, 88,];

// MinNum = (a) => {
//     return Math.min.apply(null, a)
// };
// console.log(MinNum(data));
    
    
    
//    || ARRAY FOREACH  ||
    
// let data = [11, 22, 33, 1, 99, 44, 55, 66, 77, 88,];

// let a = "";
// data.forEach((val, index) => {
//     a = a + " " + val*2;
// })
// console.log(a);


//    ||ARRAY MAP  ||

// let data = [11, 22, 33, 1, 99, 44, 55, 66, 77, 88,];
// let a = [];
// a = data.map((val, index) => {
//     return val - 5;
// })
// console.log(a);




//    || ARRAY FILTER ||

// let data = [11, 22, 33, 44, 55, 66, 77, 88,];
// let a = [];
// a = data.filter((val, index) => {
//     return val <= 33
// })
// console.log(a);


//    || ARRAY REDUCE  ||
// let data = [11, 22, 33, 44, 55, 66, 77, 88 ,4];

// let abc;
// abc = data.reduceRight((a, val, index) => {
//     return a + val;
// })
// console.log(abc);


//     || ARRAY SOME ||

// let data = [11, 22, 33, 44, 55, 66, 77, 88];
// let abc;
// abc = data.some((val, index) => {
//     return val < 25;
// })
// console.log(abc);



//    || ARRAY EVERY ||
// let data = [11, 22, 33, 44, 55, 66, 77, 88];
// let abc;
// abc = data.every((val, index,array) => {
//     return val <= 99;
// })
// console.log(abc);


//   || ARRAY FIND  ||
// let data = [11, 22, 33, 44, 55, 66, 77, 88];
// let abc;
// abc = data.find((val, index) => {

//     return val >= 35;
// })
// console.log(abc);



//   || ARRAY FINDINDEX ||

// let data= [11, 22, 33, 44, 55, 66, 77, 88];
// let abc;
// abc = data.findIndex((val, index) => {
//     return val >= 25;
// })
// console.log(abc);


//   ||ARRAY ENTRIES  ||
// let data = [11, 22, 33, 44, 55, 66, 77, 88];
// let abc = data.entries();

// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);


//    ||ARRAY INCLUDES ||

// let arr = [10, 20, 30, 40, 50, 60];
// let data;
// data = arr.includes(30);
// console.log(data);



//   || ARRAY COPYWITHIN ||

// let data = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(data);
// console.log(data.copyWithin(0, 4, 7));