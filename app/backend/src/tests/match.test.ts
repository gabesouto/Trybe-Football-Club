// tests/integration/Book.test.ts

import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import SequelizeMatches from '../database/models/SequelizeMatchesModel';
import { allMatches, matchesInprogress, matchesNotInProgress } from './mocks/match.mock';



chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('match tests', function() {
  const loginData = {email: 'admin@admin.com', password:'secret_admin'}
 
  it('should get all match', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves(allMatches as any);



    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(allMatches);
  });

  it('should get all matches in progress', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesInprogress as any);



    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesInprogress);
  });

  it('should get all matches not in  progress', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesNotInProgress as any);



    const { status, body } = await chai.request(app).get('/matches?inProgress=false');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesNotInProgress);
  });

  it('should  update matches', async function() {
    const {body: {token}} = await chai.request(app).post('/login').send(loginData)
    const novaPartida = {
      homeTeamId: 1,
      homeTeamGoals: 0,
      awayTeamId: 2,
      awayTeamGoals: 1,
      inProgress: true,
    };

 
    // Configure o stub para a função SequelizeMatches.create() retornar a partida criada
    sinon.stub(SequelizeMatches, 'create').resolves(novaPartida as any);

    // Faça uma requisição para a rota ou função que cria a partida (substitua '/rota/para/criar/partida' pelo caminho correto)
    const { status, body } = await chai.request(app)
      .post('/matches')
      .set('Authorization', `Bearer ${token}`) // Adicione o token ao cabeçalho da requisição
      .send(novaPartida);

    // Verifique se a resposta da requisição é o que você espera
    expect(status).to.equal(201);
    expect(body).to.deep.equal(novaPartida);
 
  });




  afterEach(sinon.restore);
});