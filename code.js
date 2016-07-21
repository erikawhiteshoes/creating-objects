(function() {
  var id = 0;

  var generateId = function() { 
    return (id = id + 1);
  };

  Object.prototype.id = function() {
    var newId = generateId();

    this.id = function() { return newID;  };
    return newId;
  };

var factoryObject = function() {
  var toString = function() {
    return "factory!";
  };

  return {
    toString: toString
  };
};

var obj1 = factoryObject();
console.log(obj1.id());
var obj1a = factoryObject();
console.log(obj1a.id());

var protoObject = function() {
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
})();
