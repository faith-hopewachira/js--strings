//EXTRACTING THE LAST FOUR LETTERS
let x = "extravaganza";
console.log(x[8], x[9],x[10],x[11]);


//INSERTING A STRING AT THE FOURTH INDEX
const food = "The quick fox jumped over the lazy dog";
let r = "eat";
const food2 = `The ${r} quick fox jumped over the lazy dog`;
console.log({food2});


//COUNTING NUMBER OF TIMES A STRING APPEARS
const story= "The quick brown fox jumps over the lazy dog";
let f ="The quick brown fox jumps over the lazy dog";
console.log(
    (f.match(/brown/g)).length);
console.log(
    (f.match(/the/g)).length);


//FINDING WORDS IN A STRING
const string1 = "The pupils are reading in the library";
let t = string1.indexOf('are');
console.log({t});

const string2 = "The child was sitting on the table before it fell";
let g = string1.indexOf('sitting');
console.log({g});


//CONVERTING STRINGS
let a = "wonderful";
console.log(a.toUpperCase());

let b = "amazing";
let c = "UndERneath";
console.log(b.toLowerCase());
console.log(c.toLowerCase());


let d = "A wonderful world";
let titleCase = "";
d.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});

console.log(titleCase);

