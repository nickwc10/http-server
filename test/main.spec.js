var expect = require('chai').expect;
var axios = require('axios');

const url = 'http://localhost:8080';

describe('hello-express', function () {
  this.timeout(6500);
  this.slow(3000);

  it('should have the correct page title', () =>
    axios.get(url).then((response) => {
      expect(response.data.trim()).to.equal('Hello World');
    })
  );

  it('returns the correct status code', () =>
    axios.get(url).then((response) => {
      expect(response.status).to.equal(200);
    })
  );
});
