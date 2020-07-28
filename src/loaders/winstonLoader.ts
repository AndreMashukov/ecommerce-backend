import {
  MicroframeworkLoader,
  MicroframeworkSettings
} from 'microframework-w3tec';
import { configure, format, transports } from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';
import { env } from '../env';
import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.APP_AWS_KEY_ID,
  secretAccessKey: process.env.APP_AWS_ACCESS_KEY,
  region: 'eu-central-1'
});

const consoleTransport = new transports.Console({
  level: env.log.level,
  handleExceptions: true,
  format:
    env.node !== 'development'
      ? format.combine(format.json())
      : format.combine(format.colorize(), format.simple())
});

const cloudWatchTransport = new WinstonCloudWatch({
  cloudWatchLogs: new AWS.CloudWatchLogs(),
  logGroupName: process.env.LOG_GROUP,
  logStreamName: process.env.LOG_STREAM,
  retentionInDays: parseInt(process.env.LOG_RETENTION, 0)
});

export const winstonLoader: MicroframeworkLoader = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  settings: MicroframeworkSettings | undefined
) => {
  configure({
    transports: [
      env.log.type === 'aws' ? cloudWatchTransport : consoleTransport
    ]
  });
};
