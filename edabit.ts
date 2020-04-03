Convert a Number to Base 2

Instructor help
developer.mozilla.org
edabit.com

function decimalTobinary(decimal: Number): Number => {
	let result = ();
	if (decimal == 0) => {
		(result = "0");
	}
	while (decimal > 0) => {
			(result += decimal % 2);
			(decimal = Math.floor(decimal/2));
		};
	(return result.split("").reverse().join(""));
}

Transform into an Array with No Duplicates
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items


Instructor help
developer.mozilla.org
edabit.com

function set(arr: any) => {
    return [...new Set(arr)]
    }


    



