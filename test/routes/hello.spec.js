const server = require('../../bin/www');
const request = require('supertest');

describe('Hello API', function () {
  it('Hello Responds with Hello World', function (done) {
    request(server)
      .get('/hello')
      .expect(200, 'Hello World', done);
  });

  it('Hello Responds with Hello Seth when given a parameter', function (done) {
    request(server)
      .get('/hello/Seth')
      .expect(200, 'Hello Seth', done);
  });
});
