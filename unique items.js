// Qusetion=2

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
    // The Set object in JavaScript is a collection of unique values
    // By passing the input array arr to the Set constructor, we create a new set with only unique values.
    // Array.from() method to convert the set back to an array.
  }
//  here we take number 
  let numbers = [1, 2, 3, 2, 4, 5, 1, 3];
//   here we are using filter method.
  let uniqueNumbers = removeDuplicates(numbers);
//   console.log(uniqueNumbers); 


// Qus=3 **************************************************************************************

function swapWithoutTempVar(x, y) {
    [x, y] = [y, x]; 
    return [x, y];
  }
  let x = 5;
  let y = 10;
  // let result = swapWithoutTempVar(x, y);
  // console.log(result); 
  // console.log("Before swap: x =", x, "and y =", y); // Before swap: x = 5 and y = 10
  // [x, y] = swapWithoutTempVar(x, y);
  // console.log("After swap: x =", x, "and y =", y);

// Qus=4 *********************************************************************************

function extractElements(arr) {
    const  [first, second, third, ,  last] = arr;
    return[first, second , third , last]
}
let arr =[1,2,3,4,5,6];
// let result1 = extractElements(arr);
// console.log(result1);


// Qus=5 **********************************************************************************

function findMinMax(arr1) {
  const max = Math.max(...arr1);
  const min = Math.min(...arr1);
  return { max, min };
}
const arr1 = [5, 2, 7, 1, 9];
const results = findMinMax(arr);
// console.log(results); 

// Qus=6 ********************************************************************************************

function extractNameAndStreet({ name, address: { street ,city} }) {
  return { name, street,city };
}
const person = {
  name: 'sakshi',
  address: {
    street: 'sec-36 gr.noida',
    city: 'GB Nagar',
    state: 'CA',
    zip: '201310'
  }
};

const { name, street ,city} = extractNameAndStreet(person);
console.log(name);   
console.log(street); 
console.log(city); 




    


    