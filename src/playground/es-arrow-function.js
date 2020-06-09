const multiplier = {
    nums: [2,3,4],
    num: 3,
    result(){ return this.nums.map((arrNum) => this.num*arrNum)}
} 

console.log(multiplier.result());