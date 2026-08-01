class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Count frequencies
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Place numbers into frequency buckets
        for (const [num, freq] of count) {
            buckets[freq].push(num);
        }

        // Collect from highest frequency downward
        const result = [];
        for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}