/**
 * @param {number} n
 * @return {number}
 */
// Question 70, input n, time: O(N), space: O(N), 27/09/2023
//note: basically Fib algorithm. Instead of using obj, use array.v 
var climbStairs = function (n) {
  let count = 0;
  mem = {};
  count = helper(n, mem);
  return count;
};

let mem = [];
const helper = (n, mem) => {
  if (mem[n] != undefined) return mem[n];
  if (n <= 2) {
    return n;
  }
  mem[n] = helper(n - 2, mem) + helper(n - 1, mem);
  return mem[n];
};
