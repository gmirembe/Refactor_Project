import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": "udagramgracedev",
  "password": "udagramgracedev",
  "database": "udagramgracedev",
  "host": "udagramgracedev.cw1e6ggqrnjz.us-east-2.rds.amazonaws.com",

  dialect: 'postgres',
  storage: ':memory:',
});