let input = document.getElementById("input");
let strlength =document.getElementById("strLength");

function lengthcounter()
{
    arr = input.value;
    let vowelcounter = 0;

    let vowel = ['A','E','I','O','U','a','e','i','o','u']
    for(let i in arr){
        if(vowel.includes(arr[i]))
        {
            vowelcounter++;
        }
    }
    strlength.innerHTML = vowelcounter;
}