const sieveOfEratosthenes = (limit) => {
	if (limit <= 1) {
		return [];
	}

	const output = new Array(limit + 1).fill(true);
	output[0] = false;
	output[1] = false;

	for (let i = 2; i <= limit; i++) {
		if (output[i] === true) {
			for (let j = i * 2; j <= limit; j = j + i) {
				output[j] = false;
			}
		}
	}

	let newArr = [];
	for (i = 0; i < output.length; i++) {
		if (output[i] === true) {
			newArr.push(i);
		}
	}

	return newArr;
};

const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);
