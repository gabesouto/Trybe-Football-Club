// tests/integration/Book.test.ts

import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import SequelizeTeams from '../database/models/SequelizeTeamsModel';
import allTeams from './mocks/team.mock';


chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('teams tests', function() {
  it('should get all teams', async function() {
    sinon.stub(SequelizeTeams, 'findAll').resolves(allTeams as any);



    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(allTeams);
  });

  // it('shouldn\'t create a book with invalid body data', async function() {
  //   const { status, body } = await chai.request(app).post('/books')
  //     .send({});

  //   expect(status).to.equal(400);
  //   expect(body.message).to.equal('title is required');
  // });
  afterEach(sinon.restore);
});