import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    `${__dirname}/**/*.entity.js`,
    'node_modules/nestjs-admin/**/*.entity.js',
  ],
  migrations: ['dist/src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
};

export default ormConfig;
