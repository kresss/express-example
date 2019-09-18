const server = require('../../bin/www');
const request = require('supertest');

describe('Hello API', function () {
  it('Hello Responds with Hello World', function (done) {
    request(server)
      .get('/hello')
      .expect(200, 'Hello World', done);
  });
});
