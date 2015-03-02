// adds the element to the front of the list
function prepend(element, list) {
  var prependedList = {value: element, rest: list};
  return prependedList;
};

// builds up a list data structure when given an array
function arrayToList(array) {
  var arrayLength = array.length-1;
  var newList = {value: array.pop(), rest: null};
  for (var i = 0; i < arrayLength; i++) {
   newList = prepend(array.pop(), newList);
  };
  return newList;
};

// returns the element at the given position in the list
function nth(list, number) {
  if (number === 0)
    return list.value;
  else if (list.rest === null)
    return undefined;
  else
    return nth (list.rest, number - 1);
};

// turns a list into an array
function listToArray(list) {
  var newArray = [];
  return listToArrayHelper(list, newArray);
    function listToArrayHelper(list, array) {
      if (list.rest === null) {
        newArray.push(list.value);
        return newArray;
         }
      else {
        newArray.push(list.value);
        return listToArrayHelper(list.rest, newArray);
      };
       
    };
  };


// tester kit
var testerList = arrayToList([1,2,3,4,5]);
console.log(listToArray(testerList));
  

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
