// Qstn 2
var reverse = function(str) {
	return str.split('').reverse().join('');
};

console.log(reverse('abc') === 'cba'); // true

// Qstn 2.1

var MyString = function(str) {
  this._value = str;
};

MyString.prototype = Object.create(String.prototype, {
  constructor: { value: MyString }
});

MyString.prototype.myreverse = function() {
	return this._value.split('').reverse().join('');
};

var ms = new MyString('hey');

console.log(ms.myreverse()); // yeh
