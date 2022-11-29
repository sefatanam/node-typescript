import { expect } from 'chai';
import request from 'supertest';

import createServer from '../../src/index';

const app = createServer();

describe("[Controller] Home", function () {
    
    it("[GET] Default Route", (done) => {
        request(app).get('/').expect(200).end((err, res) => {
            expect(res.body.message).to.equal('Home Controller Execute');
            done();
        });
    })
})