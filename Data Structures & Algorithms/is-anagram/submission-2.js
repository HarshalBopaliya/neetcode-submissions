class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         // If lengths are different, they can't be anagrams
        if (s.length !== t.length) {
            return false;
        }
        const count = {};

      // Count characters in s
      for(const char of s){
        count[char] = (count[char] || 0) + 1 ;
      }

      // Decrease counts using t
      for (const char of t){
        if(!count[char]){
            return false;
        }
        count[char]--;
      }

      return true;

    }
}
