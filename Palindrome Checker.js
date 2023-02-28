function palindrome(str) {
  // convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // reverse the string and compare with the original
  return str === str.split('').reverse().join('');
}
