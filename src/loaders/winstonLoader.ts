import {
  MicroframeworkLoader,
  MicroframeworkSettings
} from 'microframework-w3tec';
import { configure, format, transports } from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';
import { env } from '../env';
import * as AWS from 'aws-sdk';

if (env.log.type === 'aws')  {
  AWS.config.update({
    accessKeyId: env.app.awsKeyId,
    secretAccessKey: env.app.awsAccessKey,
    region: env.app.awsRegion
  });
}

const consoleTransport = new transports.Console({
  level: env.log.level,
  handleExceptions: true,
  format:
    env.node !== 'development'
      ? format.combine(format.json())
      : format.combine(format.colorize(), format.simple())
});

const cloudWatchTransport = new WinstonCloudWatch({
  cloudWatchLogs: env.log.type === 'aws' ? new AWS.CloudWatchLogs() : undefined,
  logGroupName: env.log.group,
  logStreamName: env.log.stream,
  retentionInDays: parseInt(env.log.retention, 0)
});

export const winstonLoader: MicroframeworkLoader = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  settings: MicroframeworkSettings | undefined
) => {
  return configure({
    transports: [
      env.log.type === 'aws' ? cloudWatchTransport : consoleTransport
    ]
  });
};
