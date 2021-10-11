var rotate = function(nums, k) {
    let index = nums.length - (k % nums.length)
    let temp = {...nums}

    for (var i = 0; i < nums.length; i++) {
        if (index === nums.length) {
            index = 0
        }

        nums[i] = temp[index]
        index++
    }
    
    return nums
};

console.log(rotate([1,2,3,4,5], 2))