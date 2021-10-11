var rotate = function(nums, k) {
    let index = nums.length - (k % nums.length)
    let back = nums.slice(0, index)
    let front = nums.slice(index)
    
    return front.concat(back)
};

console.log(rotate([1,2,3,4,5], 2))