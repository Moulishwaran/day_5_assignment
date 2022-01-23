//Print odd numbers in an array:

//(function() {
  //  var addNumbers = 3 + 5;
    //return addNumbers;
    //})();

//    Convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  titleCase("I'm a little tea pot");


//Sum of all numbers in an array
const sum = function() {
    return function sum(x, y, z) {
      const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0);
    };
  }();
  console.log(sum(1, 2, 3))



  //Return all the prime numbers in an array

  const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
  // Array(20).keys() generates numbers from 0 to 19.
  
  function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13, 17, 19]

  //Return all the palindromes in an array
  
  const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

  console.log(getAllPalindromes([ "noon"]));



 // Remove duplicates from an array

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique);



//Rotate an array by k times


function rotateCalendar(){
    var cal=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    cal=cal.concat(cal.splice(0,new Date().getMonth()));
    console.log(cal);  // return cal;
}


//programs in arrow functions

//Print odd numbers in an array


const odd = arr => arr. filter(I =>  1);
console.log(odd([1,2,3,4,5,6,7,8,9,10]));


//Convert all the strings to title caps in a string array

function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());

}
console.log(titleCase('iron man'));
console.log(titleCase('iNcredible hulk'));

//Sum of all numbers in an array

const sum =[1, 2, 3, 4, 5, 6].reduce(add, 0);

function add(accumulator , a){
    return accumulator + a;
}
console.log(sum);


//Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);


//Return all the palindromes in an array

const getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
   console.log(getAllPalindromes(["malayalam"]));


