const fsPromises = require('fs').promises;

module.exports = function copy(src, dst) {
  return fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(dst, data));
}
