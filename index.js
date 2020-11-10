/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s = mom, the list of all anagrammatic pairs is [m, m], [mo, mo] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in s.

sherlockAndAnagrams has the following parameter(s):

s: a string

Input Format

The first line contains an integer q, the number of queries.
Each of the next q lines contains a string s to analyze.

String s contains only lowercase letters ascii[a-z].

Output Format

For each query, return the number of unordered anagrammatic pairs.

Sample Input 0

2
abba
abcd
Sample Output 0

4
0
Explanation 0
*/

console.log('live share');

const sherlockAndAnagrams = (str) => {
  if (typeof str !== 'string') throw new TypeError('input must be a string!');

  const hashMap = new Map();
  //make an array of arrays of every combination of string: a, ab, abb, abba, b, bb, bba, etc
  const everyCombination = [];
  recursiveCollectCombos(everyCombination);



  //compare them all together to see if they are reverses of each other by...


};

const recursiveCollectCombos = (array) => {
  array[0];

  //hmmm
  recursiveCollectCombos();
};

console.log(sherlockAndAnagrams('mom'));