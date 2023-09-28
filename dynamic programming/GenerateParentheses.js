//22 . 22. Generate Parentheses
/** need to review recursive and recursive dp
 * time comx=?
 * space comx=?
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  strList = [];
  recursive(n - 1, n, strList, "(", n);
  return strList;
};
const recursive = (left, right, strList, str, n) => {
  if (left === 0 && right === 0) {
    strList.push(str);
    return;
  }
  if (left > 0) {
    recursive(left - 1, right, strList, str + "(", n);
  }
  if (right > left) {
    recursive(left, right - 1, strList, str + ")", n);
  }
};
