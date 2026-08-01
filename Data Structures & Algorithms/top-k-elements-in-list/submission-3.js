class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Min-heap: stores [frequency, num], ordered by frequency
        const minHeap = [];
        
        const heapPush = (freq, num) => {
            minHeap.push([freq, num]);
            let i = minHeap.length - 1;
            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);
                if (minHeap[parent][0] <= minHeap[i][0]) break;
                [minHeap[parent], minHeap[i]] = [minHeap[i], minHeap[parent]];
                i = parent;
            }
        };

        const heapPop = () => {
            const top = minHeap[0];
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            let i = 0;
            while (true) {
                let smallest = i;
                const left = 2 * i + 1, right = 2 * i + 2;
                if (left < minHeap.length && minHeap[left][0] < minHeap[smallest][0]) smallest = left;
                if (right < minHeap.length && minHeap[right][0] < minHeap[smallest][0]) smallest = right;
                if (smallest === i) break;
                [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
                i = smallest;
            }
            return top;
        };

        for (const [num, freq] of count) {
            heapPush(freq, num);
            if (minHeap.length > k) heapPop(); // evict smallest freq
        }

        return minHeap.map(([_, num]) => num);
    }
}