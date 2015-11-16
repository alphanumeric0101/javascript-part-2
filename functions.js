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
        email: "bpp@riseup.net"
    },
    {
        name: "Marc Garvy",
        email: "nomoss@mail.net"
    },
    {
        name: "Jerry Seinfeld",
        email: "jcomedy@mail.net"
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
console.log(squares);