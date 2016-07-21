var factoryObject = function() {
  var toString = function() {
    return "factory!";
  };

  return {
    toString: toString
  };
};

var obj1 = factoryObject();
console.log(obj1.toString());
