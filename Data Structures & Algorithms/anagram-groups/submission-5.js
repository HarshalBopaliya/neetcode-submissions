class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // Edge case: empty input array
        if(strs.length==0){
            return []
        }
        
        const map = new Map();

        for (const str of strs) {
            // Build a frequency count of each of the 26 lowercase letters
            const count = new Array(26).fill(0);
            for (const ch of str) {
                count[ch.charCodeAt(0) - 97]++; // 'a'.charCodeAt(0) === 97
            }

            // Use the count array as a unique key for this anagram group
            const key = count.join('#');

            // Add the string to its group in the map
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        // Return all grouped anagram lists
        return Array.from(map.values());
    }
}
