class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        const unique = Array.from(count.keys());
        const n = unique.length;

        const partition = (left, right, pivotIdx) => {
            const pivotFreq = count.get(unique[pivotIdx]);
            // Move pivot to end
            [unique[pivotIdx], unique[right]] = [unique[right], unique[pivotIdx]];
            let storeIdx = left;
            for (let i = left; i <= right; i++) {
                if (count.get(unique[i]) < pivotFreq) {
                    [unique[storeIdx], unique[i]] = [unique[i], unique[storeIdx]];
                    storeIdx++;
                }
            }
            // Move pivot to final place
            [unique[right], unique[storeIdx]] = [unique[storeIdx], unique[right]];
            return storeIdx;
        };

        const quickSelect = (left, right, kSmallest) => {
            if (left === right) return;
            let pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
            pivotIdx = partition(left, right, pivotIdx);
            if (kSmallest === pivotIdx) return;
            else if (kSmallest < pivotIdx) quickSelect(left, pivotIdx - 1, kSmallest);
            else quickSelect(pivotIdx + 1, right, kSmallest);
        };

        // We want the top k frequent = elements from index n-k to n-1
        quickSelect(0, n - 1, n - k);
        return unique.slice(n - k);
    }
}