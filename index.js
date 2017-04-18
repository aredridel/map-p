const Promise = require('any-promise');

module.exports = function map(list, mapper) {
  return Promise.resolve(list).then(list => Promise.all(list.map((e, i) => Promise.resolve(e).then(e => mapper(e, i)))))
}
