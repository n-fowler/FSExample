//const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const datasaver = require('../datasaver');
const expect = chai.expect;
chai.should();
chai.use(sinonChai);

process.env.NODE_ENV = 'test';

//Can the datasaver save data successfully?
//Are we running on schedule every 30 seconds?

describe('Datasaver data handling',
    () => {
        it('should save data successfully',
            async () => {
                const users = await datasaver.getSavedUsers();
                var success = await datasaver.saveUsers(users);
                expect(success).to.be.eql(true);
            });
        it('should run every 30 seconds',
            async () => {
                var lastChecked = await datasaver.checkCurrentUsers();
                expect(lastChecked).to.be.eql(new Date());
                expect(datasaver.waitTimeMs).to.be.eql(30000);
            });
    });

