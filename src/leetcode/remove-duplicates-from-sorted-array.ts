/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums: number[]) {
    let index = 0;
    while(index < nums.length){
        const value = nums[index];
        for(let i = index + 1; i < nums.length; i++){
            if(nums[i] === value){
                nums.splice(i, 1);
                i -= 1;
            }
        }
        index++;
    }
    return nums.length;
};