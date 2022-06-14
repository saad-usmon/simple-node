const path = require("path");

//working with basename()
const basename = path.basename(__dirname);
console.log(basename);

//working with extname()
const extname = path.extname(__filename);
console.log(extname);

//working with format()
const format = path.format({
  root: "/ignored",
  dir: "OneDrive/Desktop/JS learning/simple-node/modules",
  base: "path",
});
console.log(format);

//working with join()
const join = path.join(__dirname, "path.js");
console.log(join);
