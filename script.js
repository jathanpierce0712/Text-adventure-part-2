
function MAinFunction(){
input = document.getElementById("firstInput").nodeValue;
console.log(input);

document.getElementById("output")



var enemies = [
    {
"Name" : "David",
"Enemy Type" : "Main boss",
"Special abillity" : "Punch",
"Hit Points" : 25.0,
"Power" : 50.0,
"Dodge" : 30.0,
"Block" : 15.0 ,
    },
];

var heroes = [
    {
    "Name" : "Big Ben",
    "Hero Type" : "Humsn tank",
    "Experience" : "Damage ressistance",
    "Hit Points" : 50.0,
    "Power" : 10.0,

     "Name" : "Flacc attack",
    "Hero Type" : "Sharpshooter",
     "Experience" : "Musket",
    "Hit Points" : 30.0,
     "Power" : 100.0,
     
         },
        ];
     var heroMultiplier = Math.floor(Math.random() * 10 + 1 );

var enemyMultiplier = Math.floor(Math.random() * 10 + 1 );
    
console.log(heroMultiplier)

console.log(enemyMultiplier)
var socket = io();
var light;

