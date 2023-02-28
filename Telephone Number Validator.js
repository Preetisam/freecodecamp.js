function telephoneCheck(str) {
  // regular expression to match valid US phone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
  // test the input string against the regular expression
  return regex.test(str);
}
