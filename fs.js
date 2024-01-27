const fs = require("fs");

//This reads through the file "fsTest.txt" and shows the data to the console.
fs.readFile("fsTest.txt", function (err, data) {
  if (err) {
    throw err;
  }

  console.log(`${data}`);
});
