//this is a javascript file


//function to sort strings by length, longest first

var animals = ['cat', 'rhino', 'koala', 'cheetah'];

function compare2StringsByLength(a, b) {
  if (a.name.length > b.name.length) {
    return -1;
  }
  if (a.name.length < b.name.length) {
    return 1;
  }
  return 0;
}

function alphabetizeEmails(a,b) {
  if (a.email < b.email) {
    return -1;
  }
  if (a.email > b.email) {
    return 1;
  }
  return 0;
}

// console.log(animals.sort(compare2StringsByLength));

// +++++++++++++++++++++++++++++++++++++++++++++++++ //

// array of objects with email and name 

var entries = [
    {
        name: "Malcom X",
        email: "bpp@riseup.net",
        num : 1
    },
    {
        name: "Marc Garvy",
        email: "nomoss@mail.net",
        num: 2
    },
    {
        name: "Jerry Seinfeld",
        email: "jcomedy@mail.net",
        num: 3
    }
];
    
    /*
        The following logs sort by 'longest name' and 'alphabetic email addresses' respectively
    
            console.log(entries.sort(compare2StringsByLength));

            console.log(entries.sort(alphabetizeEmails));
    */

//square each number in an array    

var numbers = [1, 4, 9];
var squares = numbers.map(function(num){return num*num});

// square each num property in an array of objects

var squareNum = entries.map(function(a){
    return a.num * a.num;
});

// console.log(squareNum);

//operationMaker

function operationMaker(operation){
    if (operation === 'add')
        {
            return function(a,b){
                return a + b;
            }
        };
    
    if (operation === 'subtract'){
        return function(a,b){
            return a - b;
        };
    }
    if (operation === 'mult'){
        return function(a,b){
            return a * b;
        };
    }
    if (operation === 'div'){
        return function(a,b){
            return  a / b;
        };
    }
}

var adder = operationMaker('add');
var sum = adder(5, 10);

console.log(sum);