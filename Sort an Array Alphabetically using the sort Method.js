function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);




function reverseAlphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
  // Add your code above this line
}
reverseAlphabeticalOrder(["l", "h", "z", "b", "s"]);
// Returns ['z', 's', 'l', 'h', 'b']
