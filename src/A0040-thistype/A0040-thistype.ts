function removeDuplicates (nums: number []): number [] {
    const limit = 5;
    for (let i = 0; i <= limit; i++) {
        if (nums) nums.pop();
        nums.push(i);
    }
    return nums;
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5]));
