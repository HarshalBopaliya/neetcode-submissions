class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Sort by frequency descending
        const sorted = Array.from(count.entries())
            .sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map(([num]) => num);
    }
}