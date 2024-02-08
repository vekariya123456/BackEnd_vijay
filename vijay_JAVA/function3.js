//Function Generatot =>yield  //

// function* hello(a, b)
// {
//     yield a + b;
//     yield a - b;
//     yield a * b;
//     return a / b;
// }

// let a = hello(10, 5);

// console.log(a.next().value);  //50
// console.log(a.next().value);  //5
// console.log(a.next().value);  //50
// console.log(a.next().value);  //2



//this keyword //

// let person =
// {
//     firstName: "Skill",
//     lastName: "Qode",
//     age: 25,
//     fullname: function ()
//     {
//         return this.firstName + " " + this.lastName + "\nage is:" + this.age;
//     }
// }
// console.log(person.fullname());


//call method //

// let person =
// {
//     fullname: function (city) {
//         return this.firstName + " " + this.lastName + "\nCity Name is: " + city;
//     },
// };

// let hello =
// {
//     firstName: "Skill",
//     lastName: "Qode",
// };

// let data =
// {
//     firstName: "Virat",
//     lastName: "Kohli",
// };
// console.log(person.fullname.call(data,"surat"));




//Apply Method //

// let person =
// {
//     fullname: function (city) {
//         return this.firstName + " " + this.lastName + "\nCity Name is: " + city;
//     },
// };

// let hello =
// {
//     firstName: "Skill",
//     lastName: "Qode",
// };

// let data =
// {
//     firstName: "Virat",
//     lastName: "Kohli",
// };
// console.log(person.fullname.call(hello,["surat"]));



// //bind Method //
// let person = {
//     firstName: "Skill",
//     lastName: "Qode",
//     fullname: function (city) {
//         return this.firstName + " " + this.lastName + "\nCity name is:" + city;
//     },
// };

// let data = {
//     firstName: "Virat",
//     lastName: "Kohli",
// }
// console.log(person.fullname("Surat"))
// let aa = (person.fullname.bind(data, "Surat")());
// console.log(aa);

 