// .pop() - removes last element of a list and returns the value it removed.
// .push() - pushes element to the end of a list
// .slice() - returns elements from a start of an index to the end without changing the original list
// .splice() - modifies the original list by removing, replacing or adding elements
// .shift() - removes element at the first index (0th) and shifts the list accordingly
// .unshift() - adds a specific element to the beginning of the list
// .length() - returns the amount of elements in a list 

// .filter() - creates a new array with all elements that pass the specified condition
// syntax: const variable = array.filter(element => element (condition));

// .reduce() - returns a single element of combined elements in of a list usually to add
// syntax: const variable = array.reduce((acc, curr) => acc + curr);

// .map() - loops through an entire list and creates a new array with any modifications
// syntax: const variable = array.map(element) => {...};

//.indexOf() - returns the first index of an element that's found. 
// syntax: const variable = array.indexOf(element);
// optional parameter: startIndex that lets you configure where to start searching from

// .forEach() - loops through all elements of an array. different from for loop as there's no condition to stop it!
// syntax: const variable = array.forEach(element) => {...}


var starters = ["bulbasaur", "squirtle", "charmander"];

// Q1: Remove the last element of the starters list.

/* removeCharmander = starters.pop();
   onsole.log(starters);
*/

// Q2: Remove the first element of the starters list

// We need to use a method that removes the first element. This method can be done by using shift or splice.

//Shift

/* var shiftStarters = starters.shift(starters);
 console.log(starters);
*/

//Splice

//We want to remove the first element "bulbusar" so we will do .splide(0, 1)

/*var spliceStarters = starters.splice(0, 1);
console.log(starters); */

// Q3: Bring back the first element of the starters list

//We need to use the unshift method or splice in order to insert an element back in. We can use the variable we stored the element that was shifted.

//Unshift
/*var unshiftStarters = starters.unshift(shiftStarters);
console.log(starters);
*/

//Splice

/*var insertStarters = starters.splice(0, 0, "bulbasaur"); //set delete count as 0 and add the element to insert
console.log(starters);
*/

// Q4: Find the index of "squirtle"

//We need to use the method findIndex.

/* var findIndexSquirtle = starters.findIndex(index => index !== "squirtle");
console.log(findIndexSquirtle); */

// Q5: Loop through each element of the array.

//We need to use .forEach() since it can loop through the contents

/*var loopThroughStarters = starters.forEach(starters => {
    console.log(starters);
}) */

// Q6: Filter through the array so it only prints out squirtle and charmander.

//We need to use the .filter method. Then we find where it has squirtle and charmander

/* var filterStarters = starters.filter(isSquirtleOrCharmander => {
    if(isSquirtleOrCharmander === "squirtle" || isSquirtleOrCharmander === "charmander"){
        console.log(isSquirtleOrCharmander);
    }
})
*/

// Q7: Add "pikachu" to the end of the list

//We need to use the .push() method to do this.

var addPikachu = starters.push("pikachu");
console.log(starters);


// Q8: Create a new array that capatalizes all elements of the list using .map()

//We need to use .map method and .toUpperCase() method

/*var startersUpper = starters.map(upperCase => {
    console.log(upperCase.toUpperCase());
})

*/
