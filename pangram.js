function isPangram(sentence) {
    const letters = new Set
    const lowercaseSentence = sentence.toLowerCase();
    for (let i = 0; i < lowercaseSentence.length; i = i + 1) {
        const char = lowercaseSentence[i]

        if (/[a-z]/.test(char)) {
            letters.add(char)
        }
    }
    return letters.size === 26;
}

const sentence = "The quick brown fox jumps over the lazy dog."

console.log(isPangram(sentence))

// code runtime = O(n)