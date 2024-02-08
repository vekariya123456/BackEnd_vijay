// RETURN IN ALPHABATIC WISE OF STRING WORD

// function arr(str) {
//     return str.split('').sort().join('');
// }
// console.log(arr(prompt("Enter string: ")));



// || RETURN FIRST CHARACTER OF WORD IN ALPHABAT ||

// const text1 = "the quick brown box";
// const text2 = text1.toUpperCase();

// console.log(text1);
// // console.log(text2);


// function capital_firstletter(str) {
    
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }

//     let capitizedstr = words.join(' ');
//     return capitizedstr;
// }

// let inputstring = 'the quick brown box';
// let outputstring = capital_firstletter(inputstring);
// console.log(outputstring);




//  ||FIND LONGEST WORD IN STRING ||


let alph = prompt("Enetre your string: ");

let r = longest_word(alph);
console.log("Largest world: ", r);

function longest_word(str) {
    let words = str.split(' ');
    let result = '';
    
    for (let i = 0; i < words.length; i++){
        if (words[i].length > result.length) {
            result = words[i];
        }
    }
    return result;
}
