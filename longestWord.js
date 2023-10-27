function findLongestWord(words) {
    let longestLength = 0

    for (let i = 0; i < words.length; i = i + 1) {
        const word = words[i]
        const wordLength = word.length

        if (wordLength > longestLength) {
            longestLength = wordLength
        }
    }
    return longestLength
}

const words = ["hi", "hello", "goodbye"]

const longestLength = findLongestWord(words)

console.log(findLongestWord(longestLength))

// code runtime = O(n)

//space complexity = O(1)
