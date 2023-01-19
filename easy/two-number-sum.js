const array = [3, 5, -4, 8, 11, 1, -1, 6];

const nums = {};

function twoNumberSum(targetSum, Array) {
	for (const num of Array) {
		const potientalMatch = targetSum - num;

		if (potientalMatch in nums) {
			console.log('work');
			return [potientalMatch, num];
		} else {
			nums[num] = true;
		}
	}
	console.log(nums);
	return [];
}

console.log(twoNumberSum(10, array));
