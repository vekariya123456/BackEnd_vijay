/* 
     String => collection of characters(Array)

*/

// let txt;
// let str = "hellow World";
// str = 'Skill Qode';

// txt = "Hellow guys' dhytggjkjkjs"
//txt = 'Hellow guys"dhytggjkjkjs'
// console.log(txt);


/*  String Methods

    length -> property
    slice(start position, end pposition)
    substring(start position, end pposition)
    substr(start position, length)
    toUpperCase -> upper case convert
    toLowerCAse -> lower case convert
    charAt -> return index character
    charCodeAT -> retun index character ASCII value
    contact -> merge two string
    replace -> Replace Any word
    replaceAll -> Replace same Word in comple String
    trim -> Remove Extra Space 
    trim.start -> remove Extra Space From Start
    trim.End ->  remove Extra Space End
    padstart -> 
    padEnd ->
    split -> string convert in Array 

*/



// let data = "JavaScript is the world's most popular programming language."

// console.log(data.length);
// console.log(data.slice(5, 12));       // cript i
// console.log(data.slice(25));         // Staring to rest of all string
// console.log(data.slice(-12, -3));   //last to counting

// console.log(data.substring(5, 12));    // cript i
// console.log(data.substring(25));      // Staring to rest of all string
// console.log(data.substring(-12));    //counting to 0
// console.log(data.substring(-12, 5))    //counting to 0

// console.log(data.substr(5,12))   // cript is the
// console.log(data.substr(-15, 12));  // mming langua
// console.log(data.toUpperCase());
// console.log(data.toLowerCase());
// console.log(data.charAt(0))
// console.log(data.charCodeAt(0));

// console.log(data.concat("Hellow World", "\n SkillQode"));






// let data = "JavaScript is the world's most popular programming language world."

// console.log(data.replace("world's", "SkillQode"));
// console.log(data.replace(/world/i, "SkillQode"));

// console.log(data.replaceAll("world", "SkillQode"));

// let txt = "           hellow world            ";
// console.log(txt.length);
// console.log(txt.trim());        // Remove Extra Space
// console.log(txt.trimStart());   // Remove extra Space From Start
// console.log(txt.trimEnd());        // REmove Extra Space FRom Last
// console.log("Length is: " +(txt.trimEnd().length));


// let txt = "1234";
// console.log(txt.padStart(8, "*"));
// console.log(txt.padEnd(8, "*"));

//  console.log(data.split(" "));