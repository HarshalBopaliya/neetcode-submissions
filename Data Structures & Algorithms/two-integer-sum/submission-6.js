class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Create a hash map to store: { value -> index }
        // This lets us look up "have I seen this number before?" in O(1) time.
        const map = new Map();

        // Loop through the array exactly once (single pass = O(n) time)
        for (let i = 0; i < nums.length; i++) {

            // For the current number nums[i], calculate what OTHER number
            // we'd need to add to it to reach the target.
            // Example: target = 9, nums[i] = 2  ->  complement = 7
            const complement = target - nums[i];

            // Check if that complement was already seen earlier in the array
            // (i.e., does it already exist as a key in our map?)
            if (map.has(complement)) {
                // If yes, we found our pair!
                // map.get(complement) gives us the INDEX where that earlier
                // number was stored, and `i` is the current index.
                return [map.get(complement), i];
            }

            // If the complement wasn't found, store the CURRENT number
            // and its index in the map, so future iterations can check
            // against it.
            // Example: nums[i] = 2 at index 0  ->  map = { 2 -> 0 }
            map.set(nums[i], i);
        }

        // If no pair adds up to the target, return an empty array
        // (LeetCode guarantees a solution exists, but this avoids
        // returning `undefined` in edge cases).
        return [];
    }
}