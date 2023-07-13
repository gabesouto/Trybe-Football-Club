import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import TeamsModel from './teamsModel';
// import SequelizeTeams from './SequelizeTeamsModel';
const sequelize = new Sequelize(config)

export default sequelize;

export {TeamsModel}

