import * as dotenv from 'dotenv';
import * as path from 'path';

import * as pkg from '../package.json';
import {
  getOsEnv,
  getOsEnvOptional,
  getOsPath,
  getOsPaths,
  normalizePort,
  toBool,
  toNumber
} from './lib/env';

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`
  )
});

/**
 * Environment variables
 */
export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    name: getOsEnv('APP_NAME'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    version: (pkg as any).version,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: (pkg as any).description,
    host: getOsEnv('APP_HOST'),
    schema: getOsEnv('APP_SCHEMA'),
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
    port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
    banner: toBool(getOsEnv('APP_BANNER')),
    awsKeyId: process.env.APP_AWS_KEY_ID,
    awsAccessKey: process.env.APP_AWS_ACCESS_KEY,
    awsRegion: process.env.APP_AWS_REGION,
    dirs: {
      migrations: getOsPaths('TYPEORM_MIGRATIONS'),
      migrationsDir: getOsPath('TYPEORM_MIGRATIONS_DIR'),
      entities: getOsPaths('TYPEORM_ENTITIES'),
      entitiesDir: getOsPath('TYPEORM_ENTITIES_DIR'),
      controllers: getOsPaths('CONTROLLERS'),
      middlewares: getOsPaths('MIDDLEWARES'),
      interceptors: getOsPaths('INTERCEPTORS'),
      subscribers: getOsPaths('SUBSCRIBERS'),
      resolvers: getOsPaths('RESOLVERS')
    }
  },
  log: {
    type: process.env.LOG_TYPE,
    level: getOsEnv('LOG_LEVEL'),
    json: toBool(getOsEnvOptional('LOG_JSON')),
    output: getOsEnv('LOG_OUTPUT'),
    group: process.env.LOG_GROUP,
    stream: process.env.LOG_STREAM,
    retention: process.env.LOG_RETENTION
  },
  db: {
    type: getOsEnv('TYPEORM_CONNECTION'),
    host: getOsEnvOptional('TYPEORM_HOST'),
    port: toNumber(getOsEnvOptional('TYPEORM_PORT')),
    username: getOsEnvOptional('TYPEORM_USERNAME'),
    password: getOsEnvOptional('TYPEORM_PASSWORD'),
    database: getOsEnv('TYPEORM_DATABASE'),
    synchronize: toBool(getOsEnvOptional('TYPEORM_SYNCHRONIZE')),
    logging: getOsEnv('TYPEORM_LOGGING')
  },
  graphql: {
    enabled: toBool(getOsEnv('GRAPHQL_ENABLED')),
    route: getOsEnv('GRAPHQL_ROUTE'),
    editor: toBool(getOsEnv('GRAPHQL_EDITOR'))
  },
  swagger: {
    enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
    route: getOsEnv('SWAGGER_ROUTE'),
    username: getOsEnv('SWAGGER_USERNAME'),
    password: getOsEnv('SWAGGER_PASSWORD')
  },
  monitor: {
    enabled: toBool(getOsEnv('MONITOR_ENABLED')),
    route: getOsEnv('MONITOR_ROUTE'),
    username: getOsEnv('MONITOR_USERNAME'),
    password: getOsEnv('MONITOR_PASSWORD')
  }
};
