const server = require('../../bin/www');
const request = require('supertest');

describe('Index API', function () {
  it('Index ', function (done) {
    request(server)
      .get('/')
      .expect(200, 'Awesome Example API', done);
  });
});
