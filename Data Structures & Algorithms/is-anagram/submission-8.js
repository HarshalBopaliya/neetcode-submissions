class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // If the lengths are different, they can't be anagrams.
        if (s.length !== t.length) {
            return false;
        }

        // Create an array of size 26 to store the frequency of each letter.
        const count = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        // Increase the count for characters in s
        // and decrease the count for characters in t.
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - aCode]++;
            count[t.charCodeAt(i) - aCode]--;
        }

        // If any count is not 0, the strings are not anagrams.
        for (let i = 0; i < 26; i++) {
            if (count[i] !== 0) {
                return false;
            }
        }

        // All counts are 0, so the strings are anagrams.
        return true;
    }
}