//this is a javascript file


//function to sort strings by length, longest first

var animals = ['cat', 'rhino', 'koala', 'cheetah'];

function compare2StringsByLength(a, b) {
  if (a.length > b.length) {
    return -1;
  }
  if (a.length < b.length) {
    return 1;
  }
  return 0;
}

console.log(animals.sort(compare2StringsByLength));

