/**
 * @param {string} s
 * @return {string}
 */
// 5. Longest Palindromic Substring, input n, time: O(N^2), space: O(N), 28/09/2023
//note: dp programming
var longestPalindrome = function (s) {
  let maxL = 0;
  let maxR = 0;
  let tempIdx = 0;
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    let left = 0;
    let right = 0;
    let flag = 1;
    let currentCount = 1;
    while (right <= s.length - i && left <= i) {
      if (s[i + flag] === s[i]) {
        right = right + 1;
        flag++;
        currentCount = currentCount + 1;
        if (right >= maxR && count <= currentCount) {
          tempIdx = i;
          maxL = left;
          maxR = right;
          count = currentCount;
        }
        continue;
      }

      if (s[i + right] === s[i - left]) {
        if (right != 0 && left != 0) {
          console.log(s[i], s[i + right], s[i - left], count, currentCount);
          currentCount = currentCount + 2;
        }
        left = left + 1;
        right = right + 1;

        if (left >= maxL && right >= maxR && count <= currentCount) {
          tempIdx = i;
          maxL = left;
          maxR = right;
          count = currentCount;
        }
        continue;
      }

      break;
    }
  }
  console.log(s.substring(tempIdx - maxL + 1, tempIdx + maxR));
  return s.substring(tempIdx - maxL + 1, tempIdx + maxR);
};

longestPalindrome("cbcaapppp");
