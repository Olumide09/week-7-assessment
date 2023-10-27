function hasUniqChar(str) {
    for (let i = 0; i < str.length; i = i + 1) {
        for (let j = 0; j < str.length; j = j + 1) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}


console.log(hasUniqChar('Monday'))

// code runtime = O(n^2)