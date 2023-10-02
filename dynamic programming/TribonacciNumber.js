/** 1137. N-th Tribonacci Number
time O(n) space O(n),2/10/2023
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr=[0,1,1];
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    } if(n==2){
        return 1;
    }
    helper(n,arr);
    return arr[n];
};
let helper = (n,arr) => {
    if(arr[n] !==undefined){
        return arr[n];
    }
        arr[n]=helper(n-1,arr)+ helper(n-2,arr)+ helper(n-3,arr);
        return arr[n];

}