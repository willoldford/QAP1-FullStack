const validator = require("validator");

const a = "william.oldford@keyin.com"; // valid email
const b = "abcdefg@gmail"; // invalid email

// checks if the emails are valid and returns 'True' or 'False' to the console
//shoudl return valid
if (validator.isEmail(a)) {
  console.log(`${a} is a valid email`);
} else {
  console.log(`${a} is not a valid email`);
}

//should returninvalid
if (validator.isEmail(b)) {
  console.log(`${b} is a valid email`);
} else {
  console.log(`${b} is not a valid email`);
}
