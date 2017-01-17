import React from 'react';

class JStest extends React.Component {
  render() {
    return (
      <div>
      	{this.getName()} <br/>
        {this.getNumbers()} <br/>
        {this.getString()} <br/>
        {this.getBoolean()} <br/>
        {this.getVars()} <br/>
        {this.getOperators()+""} <br/>
        {this.getControl()+""} <br/>
        {this.getObject()+""} <br/>
        {this.getArray()+""} <br/>
        {this.getFunction("FirstArgSent", 3,"dsfsd", "aha", true, 67)()+""} <br/>
        {this.getFunction.apply(null, ["first in array",3,"dsfsd", "aha", true, 67])+""} <br/>
        {this.getCustomObject()+""} <br/>
      </div>
   );
  }

  getName(){
  	return 'JStest.js';
  }

  getNumbers(){
      
      var s = "Math: " 
      s += " | NaN: " + (0.1 + 0.3 + NaN) ;
      s += " | Plus: " + (3 + 15); 
      s += " | PI: " + Math.PI * (1*1);
      s += " | Parse: " + parseInt("123");
      
      return s;      
  }  

  getString(){

    let s = "String: ";
    s += " | length: " + "kagagoogoo".length;
    s += " | replace: " + "hello, world".replace("hello", "goodbye");
    return s;
  }

  getBoolean(){

    let s = "Boolean: ";
    s += " | Boolean(123): " + Boolean(123);
    s += " | Boolean(0): " + Boolean(0);
    s += " | Boolean(NaN): " + Boolean(NaN);
    s += " | Boolean(undefined): " + Boolean(undefined);
    s += " | 7 == 8: " + Boolean(7==8);
    return s;
  }

  getVars(){

    let a ="var let const";
    {
      let b = "let";
    }
    
    const c = "const";

    //c = "ssss";

    if (a=="var let const") {
      return a;
    } else {
      //return b;
      return c;
    }


  }

  getOperators(){

    let a = "hello" + " world"; // "hello world"
    a = "3" + 4 + 5;  // "345"
    a = 3 + 4 + "5"; // "75"
    a = 123 == "123"; // true
    a = 1 == true; // true
    a = 123 === "123"; // false
    a = 1 === true;    // false

    return a;
  }

  getControl(){
    var name = "kittens";
    if (name == "puppies") {
      name += "!";
    } else if (name == "kittens") {
      name += "!!";
    } else {
      name = "!" + name;
    }
    name == "kittens!!"


    while (true) {
      break;// an infinite loop!
    }

    var input=0;
    do {
      input += 5;
    } while (input<500)
 

    for (var i = 0; i < 5; i++) {
  // Will execute 5 times
    }

    var array = ["mghm","efwf","asa"];
    let string="";

   for(var value of array) {
      // do something with value
      string = string + value;

    }

    var object = {};
    for(let property in object) {
      // do something with object property
    }
    

    var name = true && "sadasdasd";

    
    name = false || "default";
    return name;
    

    var allowed = (19 > 18) ? "yes" : "no";

    var action = 'asdas';
    switch(action) {
      case 'draw':
        break;
      case 'eat':
        break;
      default:
      }
     
    return string;


  }


  getObject(){

    var obj1 = new Object();
    var obj2 = {};
    
    var obj3 = {
      name: "Carrot",
      "for": "Max",
      details: {
        color: "orange",
        size: 12
      }
    }

    let string = "Object: " + obj3.details.color + " " + obj3.details.size;

    var sstring = obj3["details"]["color"];


    // create an object template (class ?)
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    var You = new Person("You", 24); 
    var he = new Person ("he", 43);

    string += "  "+he.name + " "+he.age+" "+he.height;

    he.name = "Moshe";
    he.age = 34;
    he.height =140;

    string += "  "+he.name + " "+he.age+" "+he.height;

    return string;

  }

  getArray(){
    let string = "";


    var a = new Array();
    a[0] = "dog";
    a[1] = "cat";
    a[2] = "hen";
    string += a + " " + a.length; // 3

    var b = ["dog", "cat", "hen", "sada"];
    string+= " "+b.length; // 3


    a = ["dog", "cat", "hen"];
    a[20] = "fox";
    string+= " " +a+" "+a.length; // 101
    string +=" "+a[15]+" ";

    for (var i=0;i<a.length;i++){

        string+=a[i];
    }
    string+=" ";
    
    b.push("sadasdasdasd");

    b.forEach(function(val,index, array){

      string+=" "+val+" "+index;

    });


    a=a.concat("concated");


    var obj = new Object({
      name: "Carrot",
      "for": "Max",
      details: {
        color: "orange",
        size: 12
      }
    });

    a=a.concat(obj.name);
    string += " toString()  : " + a.toString();


    string+= " pop: " + a.pop();
    string+= " pop: " + a.pop();
    string+= " pop: " + a.pop();
    string+= " pop: " + a.pop();
    string+= " pop: " + a.pop();

    string+= " slice: " + a.slice(1,5);

    return string;
  }

  getFunction(first, ...args){

    let string=" function args: ";

    string += " First arg: "+first;

    for (let value of args){

      string+=" | val:" + value;

    }


    return function(){return string};

  }

  getCustomObject(){

    let string ="";
    let p = new Person("jon","Voit");


    string+=p.fullName();
    string+=p.fullNameReversed();

    var function1 = p.fullName;
    string+=" function : " +function1;
    //string+=" function execution:  " +function1();

    Person.prototype.firstNameCaps = function firstNameCaps() {
      return this.first.toUpperCase()
    };
    string+= " added dynamic function: " +p.firstNameCaps(); // "SIMON"

    // add function to JS String
    String.prototype.reversed = function reversed() {
      var r = "";
      for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
      }
      return r;
    };

    string += " added dynamic function to String: " + "reversed".reversed();

    string += " Object toString():  " +p.toString();


    Person.prototype.toString = function() {
      return '<Person: ' + this.fullName() + '>';
    }

    string += " Person toString():  " +p.toString();    

    return string;
  }

  getInnerFunction(){

    return two(); 

  }


  getClosure(){

    let x = makeAdder(5);
    let y = makeAdder(20);
    x(6); // ?
    y(7); // ?




  }

}

export default JStest;









// custom objects / Constructor Function / prototype functions
function  Person(first, last) {
    
      this.first = first;
      this.last = last;    
}

Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};

Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

// inner function
function two() {
  var a = 1;
  function oneMoreThanA() {
    return a + 1;
  }
  return oneMoreThanA();
}


function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}

