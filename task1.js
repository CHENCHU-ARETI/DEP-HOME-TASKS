 /*write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

function zero(operation) {
	if (arguments.length == 0) {
		return 0;
	} else {
		return operation(0);
	}
}
function one(operation) {
	if (arguments.length == 0) {
		return 1;
	} else {
		return operation(1);
	}
}
function two(operation) {
	if (arguments.length == 0) {
		return 2;
	} else {
		return operation(2);
	}
}
function three(operation) {
	if (arguments.length == 0) {
		return 3;
	} else {
		return operation(3);
	}
}
function four(operation) {
	if (arguments.length == 0) {
		return 4;
	} else {
		return operation(4);
	}
}
function five(operation) {
	if (arguments.length == 0) {
		return 5;
	} else {
		return operation(5);
	}
}
function six(operation) {
	if (arguments.length == 0) {
		return 6;
	} else {
		return operation(6);
	}
}
function seven(operation) {
	if (arguments.length == 0) {
		return 7;
	} else {
		return operation(7);
	}
}
function eight(operation) {
	if (arguments.length == 0) {
		return 8;
	} else {
		return operation(8);
	}
}
function nine(operation) {
	if (arguments.length == 0) {
		return 9;
	} else {
		return operation(9);
	}
}

function plus(x) {
	return function (y) {
		return y + x;
	}
}
function minus(x) {
	return function (y) {
		return y - x;
	}
}
function times(x) {
	return function (y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function (y) {
		return Math.floor(y / x);
	}
}
