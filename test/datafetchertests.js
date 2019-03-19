const chai = require('chai');
const chaiHttp = require('chai-http');
const datafetcher = require('../datafetcher');
const should = chai.should();

process.env.NODE_ENV = 'test';
chai.use(chaiHttp);

//Can the datafetcher get data from the third-party api successfully?
describe('Datafetcher data retrieval',
    () => {
        it('should get data successfully',
            (done) => {
                chai.request(datafetcher.listen())
                    .get('/users')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.gt(0);
                        done();
                    });

            });
    });