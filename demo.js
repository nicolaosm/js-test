'use strict'; 
(function() {


  
function person () {
  	this.firstName = "Jim",
  	this.lastName = "moubayed"
  };

 //display (person);

let anotherPerson = new person;

const myPerson = {
  myName : "nicolaos2",
  myLast : "moubayed",
    myfun() {
    return "hello fun";
  }
};

console.log(myPerson.myfun);

//myPerson.myName = "nicolaostwo";

Object.defineProperty(myPerson, "fullName", {

  get: function() {
    return this.myName + ' ' + this.myLast;
  },

  set: function(value){
    var nameParts = value.split(' ');
    this.myName = nameParts [0];
    this.myLast = nameParts [1];
  }
  });


//display(myPerson.fullName);
//display(myPerson.myName);



 // let anotherPerson = Object.create(person)

anotherPerson.firstName = "Nick";

person.prototype.age = 25;

//display(person.prototype);

//display (anotherPerson);

//display ("hello world");


//display(person.firstName);



Object.defineProperty(person, 'property1', {
  value: 42,
  writable: false,
  enumerable: true
});



//person.setFirstName = "nick2";


//display(Object.getOwnPropertyNames(person));
//display(person);






function Human () {

	this.name = "nick",
	this.height = "176cm"
	this.info = { hair: "blonds", eyes: "blue"}
}
//let nick = new Human;





//display (nick["info"]["hair"]);




var person2 = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
//person2.lang = "en";

//display (person2);

//display(person2.language);






const student = {
names2 : {
  first: "David",
  last: "Rayy"
},
sclass : "VI",
rollno : 12 
};



function keys(obj) 
 {
    if (!isObject(obj)) return "go on champ";
    

    var keys = [];
    for (var key in obj) {
      //if (key.has(obj, key)) {
        keys.push(key)
      //}
    };
    return keys;

    /*  var arr = [];
    for (const property in obj) {
    arr.push(property);
    }
    return arr;
    */
  }

function isObject(obj)
{
    var type = typeof obj;

    return type === 'function' || type === 'object' && !!obj;
  }

//document.getElementById("output").innerHTML = keys(student);





function human(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.age = 15;
};

Object.defineProperty(human.prototype, 'fullName', { 
  get: function() { return "The Full name is " + this.fname + " " + this.lname;} 
});

human.prototype.age = 20;

let nick = new human("nicolaos", "moubayed");

//human1.__proto__.height = "175cm";

nick.age = 18;

function displayObjectData(obj) {
  var x, txt = "";
  for (x in obj) {
    txt += obj[x] + " ";
    };
    return txt;
}


document.getElementById("output").innerHTML = nick.fullName;

console.log(human.prototype);
console.log(nick.__proto__.age);
console.log(nick.age);





})();
