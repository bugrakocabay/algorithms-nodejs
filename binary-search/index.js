const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length;
	let indexToCheck;
	let checking;

	while (right > left) {
		indexToCheck = Math.floor((left + right) / 2);
		checking = arr[indexToCheck];
		console.log(indexToCheck);

		if (checking === target) {
			return indexToCheck;
		} else if (checking < target) {
			left = indexToCheck + 1;
		} else {
			right = indexToCheck;
		}
	}

	return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = binarySearch;
