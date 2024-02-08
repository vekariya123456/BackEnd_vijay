//    ||REVERSE NUMBER  ||

// let data = Number(prompt("Enter the Number: "));

// let r =a(data)
// console.log("Current NUmber is:", data);
// console.log("Reverse NUmber is: ", r);

// function a(n) {
//     let sum = 0;
//     while (n != 0) {
//         sum = sum * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }


//  ||PERFECT NUMBER ||

let num = Number(prompt("Enter NUmber: "));

if (a(num)) {
    console.log(num, "is perfect Number");
} else {
    console.log(num, "Is Not Perfect Number");
}

function a(n) {
    let sum = 0;
    for (let i = 0; i <= n / 2; i++){
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return 1;
    } else {
        return 0;
    }
}