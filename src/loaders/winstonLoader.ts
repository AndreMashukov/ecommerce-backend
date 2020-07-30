import {
  MicroframeworkLoader,
  MicroframeworkSettings
} from 'microframework-w3tec';
import { configure, format, transports } from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';
import { env } from '../env';
import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: env.app.awsKeyId,
  secretAccessKey: env.app.awsAccessKey,
  region: env.app.awsRegion
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
  logGroupName: 'ecommerce-backend',
  logStreamName: 'ecommerce-backend-stream',
  retentionInDays: 5
});

export const winstonLoader: MicroframeworkLoader = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  settings: MicroframeworkSettings | undefined
) => {
  console.log(new AWS.CloudWatchLogs());
  return configure({
    transports: [
      consoleTransport,
      cloudWatchTransport
    ]
  });
};
