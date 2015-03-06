// http://eloquentjavascript.net/05_higher_order.html
// example data: http://eloquentjavascript.net/code/ancestry.js


/* Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays. */


var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function (a, b) {
  var flat = a.concat(b);
  return flat;
}));

// Your code here.
// → [1, 2, 3, 4, 5, 6]






/* Mother-child age difference

Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//find a person's object by name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// ....mine:
var mothers = [];

// person has a mother who is in the data, therefore has a p.m.born
function hasMum(p) { 
  if (byName[p.mother])
    return p;
    else
      return false;
}

// this is the new ancestry object, filtered: kidWithMum
var kidWithMum = ancestry.filter(hasMum);

// get mother's birthdate by person from byName
function motherBorn (person) {
  var motherBorn = byName[person.mother].born;
  var motherAge = person.born - motherBorn;
  return motherAge;
};

/*
// a test to prove that this format works to call data
console.log(byName[kidWithMum[9].mother].born);
console.log(kidWithMum[9].mother);
console.log(byName["Livina Haverbeke"].born);
*/

// the actual answer
console.log((average(kidWithMum.map(motherBorn))).toFixed(1));

// → 31.2

/* My logic behind what I'm doing:
data(p): people with mothers who exist
average( array: [(m.born)- p.born ])

make this function:
m.born: {
    forEach (p.mother)
       return (mother.born)
}

Dan: Do this using forEach, somehow? 
*/

// this function will add the information to kidWithMum
kidWithMum.forEach(function (person) {
    // this works console.log(byName[person.mother].born);
	person.momBorn = byName[person.mother].born;
    // this works... console.log(person.momAge);
	person.momAge = person.born - person.momBorn;
	});

// now you could just do the average thing
//console.log(average(kidWithMum.forEach(function (p) {return p.momBorn;})).toFixed(2));
var momAgeArray = [];
kidWithMum.forEach(function (person) {momAgeArray.push(person.born - person.momBorn);});
console.log((average(momAgeArray)).toFixed(1));





/*
Historical life expectancy

When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

/* 
1  give people a century
2  gathering people by person.century into an object of lists
       Ages in cent = { 16: [44, 34, 78, etc], 17: [44, 34, 78, etc]}
3  run average() on the centurios and print them out with labels
*/

// this function will add century to each person in ancestry{}
ancestry.forEach(function (person) {
	person.century = Math.ceil(person.died / 100);
    person.age = person.died - person.born;
	//print centuries console.log(person.century);
});

// create object full of arrays of ages, keyed by century
var agesByCent = {};
ancestry.forEach(function (person){
   //if it doesn't have that century, add it
   if (!agesByCent[person.century])
     agesByCent[person.century] = [person.age];
  else
   agesByCent[person.century].push(person.age);
});

//console.log(agesByCent);
/* 
*/
// for cent in agesByCent, average agesByCent[i] and console.log it

for (var age in agesByCent)
  console.log(age+": "+average(agesByCent[age]).toFixed(1)+"\n");
// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94









// Your code here.
// every(array, function test)

var tester = [3, NaN, NaN, NaN];

// actual method on arrays
//console.log(tester.some(isNaN));

// my function to build the every method
//console.log(every(tester,isNaN));
function every (array, test) {
  var stuff = true;
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])){
      stuff = false;}
  };
   return stuff;
  };

// my function to build the some method
console.log(every(tester,isNaN));
function some (array, test) {
  var stuff = false;
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])){
      stuff = true;
       return stuff;
    }
  };
   return stuff;
  };




console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
