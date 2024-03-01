/** Sort in-place and return sorted array. */
/// [4, 3, 1 , 2]
// min is 4
// min = 1, index 2
function selectionSort(nums: number[]): number[] {
  if(nums.length <= 1) return nums;
  let min = nums[0]
  let index = 0;
  for(let i = 1; i < nums.length; i++){
    if(min > nums[i]){
      min = nums[i];
      index = i;
    }
  }
  nums[index] = nums[0];
  nums[0] = min;
  return nums = [nums[0], ...selectionSort(nums.slice(1))];
}

export { selectionSort };