class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(input) {
        for(let i = 0 ; i < input.length ; i++){
        for(let j = i+1; j < input.length; j++){
            if(input[i] === input[j]){
            return true
            }
        }
    }
     return false 
    }
}
