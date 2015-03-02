function deepEqual (thing1, thing2) {
  if ( (typeof thing1 == "object" && thing1 != null) && 
      (typeof thing2 == "object" && thing2 != null)) 
    {
      if !((countProp(thing1) === countProp(thing2)))
        return false;
  
      for (var prop in thing1) {
        console.log("prop:" + prop);
        if (prop in thing2) {
          console.log("deepEqual ...");
          if (!deepEqual(thing1[prop], thing2[prop]))
            return false; }
        else
          return false;
      };
      return true;  
    }
  if (thing1 === thing2) {
      console.log(thing1 + " === " + thing2);
      return true; 
    }
  if (thing1 === null && thing2 === null) {
      console.log("double null");
      return true; 
    }
  
  console.log("fall back: false");
  return false; 
};

function countProp(obj) {
    var size = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) size++;
    };
    return size;
  };


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



/*
prop:here
deepEqual ...
prop:is
deepEqual ...
an === an
prop:object
deepEqual ...
2 === 2
true
prop:here
deepEqual ...
fall back: false
false
prop:here
deepEqual ...
prop:is
deepEqual ...
an === an
prop:object
deepEqual ...
2 === 2
true

*/