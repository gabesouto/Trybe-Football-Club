import { Sequelize } from 'sequelize';
import * as config from '../config/database';
// import SequelizeTeams from './SequelizeTeamsModel';
const sequelize = new Sequelize(config)

export default sequelize;

