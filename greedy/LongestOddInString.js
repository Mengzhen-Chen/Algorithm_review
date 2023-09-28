// 1903. Largest Odd Number in String
/** TC: O(N), SC: O(N)
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  const numLen = num.length;
  let i = 0;
  for (j in num) {
    i = numLen - j - 1;
    let intNum = parseInt(num[i]);
    if (intNum % 2 != 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};
