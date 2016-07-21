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

var obj3 = factoryObject();
console.log(obj3.toString());

var protoObject = function(){
  return this;
};

protoObject.prototype.toString = function() {
  return "Proto!";
};

var obj2 = new protoObject();
console.log(obj2.toString());

var moduleObject = {
  toString: function() {
    return "module!";
  },
};

var obj3 = moduleObject;
console.log(obj3.toString());
