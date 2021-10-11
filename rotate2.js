var rotate = function(nums, k) {
    let index = nums.length - (k % nums.length)

    for (var i = 0; i < index; i++) {
        nums.push(nums[i])
    }

    for (var i = 0; i < index; i++) {
        nums.shift()
    }
    
    return nums
};

console.log(rotate([1,2,3,4,5], 2))