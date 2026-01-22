function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// ------------------------------------------------------------------------------------------------
// My thoughts:
// ------------------------------------------------------------------------------------------------
// It looks like it's determining anagrams by sorting and comparing the strings.
// Split the string into an array of individual characters with s.split('') / t.split('').
// Sort the string lexicographically with .sort() and join the string with .join().
// Then compare with ===.
// If the sorted results of both strings are the same, anagram determination is possible.
// ------------------------------------------------------------------------------------------------
// Is Map faster in terms of processing speed?
// But this one is easier to read.
// ------------------------------------------------------------------------------------------------
