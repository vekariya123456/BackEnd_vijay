//   || object and class ||

//  || object  ||

// let person = {
//     age: 25,
//     greet: function () {
//         return ("Hello Good Morning");
//     }
// };

// person.name = "Skill";      // add to property
// person.nationality = "Indian";

// console.log(person);
// console.log(person.age);
// console.log(person.greet());

// delete person.age;
// console.log(person);

// object access property
// console.log(person.age);
// console.log(person["age"]);



// let person = {
//     name: "Krish",
//     age: 20,
//     marks: {
//         maths: 33,
//         sci: 35,
//         eng: 47,
//     },
//     hobbies: ["reading", "dancing", "Photography"]
// };

// console.log(person);
// console.log(person.marks);
// console.log(person.marks.maths);
// console.log(person.hobbies[0]);






//     || class  ||

// class person{
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
//     greet() {
//         return ("Hello " + this.name + "\n Lives in" + this.city)
//     }
// }

// let krish = new person("Vijay", "surat");
// console.log(krish.greet());



//   ||Template Literal  ||

// let a = 25, b = 50;
// // // let data = "Hello good morning guys";
// let data = `Hellow good Morning ,,
// ${ a * b } ${ a + b }`;
// console.log(data);