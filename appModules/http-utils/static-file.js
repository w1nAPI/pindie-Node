const fs = require("fs");
const mimeTypes = require("./mime-types");
function staticFile(res, filepath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile("./public" + filepath, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Not Found");
    }
    res.end(data);
  });
}
module.exports = staticFile;
