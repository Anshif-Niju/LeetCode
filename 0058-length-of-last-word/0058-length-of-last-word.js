/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWord=s.trim().split(/\s+/).pop()

 return lastWord.length 
};