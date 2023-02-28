function rot13(str) {
  var result = "";
  
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      // If the character is an uppercase letter, shift it by 13 places
      result += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // If the character is a lowercase letter, shift it by 13 places
      result += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
    } else {
      // Otherwise, pass it through unchanged
      result += str[i];
    }
  }
  
  return result;
}
