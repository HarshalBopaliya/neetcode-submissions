class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Map to store frequency of each number: { number => count }
        const count = new Map();

        // Create buckets indexed by frequency (0 to nums.length).
        // buckets[f] will hold all numbers that occur exactly f times.
        // Size is nums.length + 1 because the max possible frequency
        // for any number is nums.length (if all elements were the same).
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Step 1: Count how many times each number appears in nums — O(n)
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Step 2: Place each number into the bucket matching its frequency — O(n)
        // e.g. if 5 appears 3 times, push 5 into buckets[3]
        for (const [num, freq] of count) {
            buckets[freq].push(num);
        }

        // Step 3: Walk buckets from highest frequency down to lowest,
        // collecting numbers until we have k of them — O(n)
        const result = [];
        for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {
            // A single bucket can contain multiple numbers with the same frequency
            for (const num of buckets[freq]) {
                result.push(num);
                // Stop as soon as we've collected k numbers
                if (result.length === k) break;
            }
        }

        return result;
    }
}