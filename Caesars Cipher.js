function caesarCipher(str, num) {
  // Wrap num around the alphabet
  num = num % 26;
  // Convert the string to all uppercase for consistency
  const upperStr = str.toUpperCase();
  // Split the string into an array of characters
  const strArr = upperStr.split('');
  // Create an array to store the encoded characters
  const encodedArr = [];
  // Loop through each character in the string
  strArr.forEach(char => {
    // Get the character code
    const charCode = char.charCodeAt();
    // If the character is a letter, shift it by num
    if (charCode >= 65 && charCode <= 90) {
      let encodedCode = charCode + num;
      // Wrap encodedCode around the alphabet
      if (encodedCode > 90) {
        encodedCode = 64 + (encodedCode - 90);
      } else if (encodedCode < 65) {
        encodedCode = 91 - (65 - encodedCode);
      }
      // Convert the encoded character code to a character
      const encodedChar = String.fromCharCode(encodedCode);
      // Add the encoded character to the encoded array
      encodedArr.push(encodedChar);
    } else {
      // If the character is not a letter, just add it to the encoded array
      encodedArr.push(char);
    }
  });
  // Join the encoded array back into a string
  const encodedStr = encodedArr.join('');
  // Return the encoded string
  return encodedStr;
}
