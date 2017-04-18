const tape = require('tape');
const map = require('./');


tape.test('does the thing', t => {
    const eventualList = Promise.resolve([1, 2, Promise.resolve(3)])
    map(eventualList, e => e * 2).then(list => {
        t.deepEqual(list, [2, 4, 6]);
        t.end();
    });
});
