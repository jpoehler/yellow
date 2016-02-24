var value = 32;

if(value >= 23){
	value += 3;
} else {
	value -= 1;
};

var a = "91";

value += a;

// value = "3591"

var array = [];

for ( var i = 0; i < 4; i++){
	array[i] = value.charAt(i);
}
// var array = ["3","5","9","1"];

array.pop();
array.shift();

//step 6 var array = ["5", "9"]
var b = "";

for(i = array.length - 1; i >= 0; i--){
	b += array[i];
}
	console.log(b);

value = parseInt(value);
b = parseInt(b);

console.log(value);
console.log(b);