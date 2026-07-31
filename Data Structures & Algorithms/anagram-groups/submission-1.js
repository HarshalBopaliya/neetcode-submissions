class Solution {
    groupAnagrams(strs) {
        if (strs.length === 0) return [];
        
        // Assign a unique prime to each letter a-z
        const primes = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
            31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
            73, 79, 83, 89, 97, 101
        ];
        
        const map = new Map();
        
        for (const str of strs) {
            let key = 1n; // Use BigInt to avoid overflow
            for (const ch of str) {
                key *= BigInt(primes[ch.charCodeAt(0) - 97]);
            }
            
            const keyStr = key.toString();
            if (!map.has(keyStr)) {
                map.set(keyStr, []);
            }
            map.get(keyStr).push(str);
        }
        
        return Array.from(map.values());
    }
}