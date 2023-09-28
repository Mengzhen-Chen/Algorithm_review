/**
 * @param {number[]} height
 * @return {number}
 */
// 11. Container With Most Water
// using two pointer method, TC: O(N), SC: O(N), 28/09/2023
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxL = 0;
  let maxR = height.length - 1;
  let maxArea = maxR * minChecker(height[left], height[right]);
  while (left < right) {
    currentArea = (right - left) * minChecker(height[left], height[right]);
    if (currentArea > maxArea) {
      maxL = left;
      maxR = right;
      maxArea = currentArea;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
const minChecker = (intA, intB) => {
  if (intA < intB) {
    return intA;
  } else {
    return intB;
  }
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
