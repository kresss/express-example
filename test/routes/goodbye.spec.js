/* eslint-env mocha */

const server = require('../../bin/www');
const request = require('supertest');

describe('Goodbye API', function () {
  it('Goodbye Responds with Goodbye', function (done) {
    request(server)
      .get('/goodbye')
      .expect(200, 'Goodbye!', done);
  });

  it('Goodbye Responds with Goodbye Seth when given a parameter', function (done) {
    request(server)
      .get('/goodbye/Seth')
      .expect(200, 'Goodbye Seth', done);
  });
});
