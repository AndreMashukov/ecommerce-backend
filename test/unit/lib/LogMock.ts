import { Logger } from '../../../src/lib/logger';

export class LogMock extends Logger {
  public debugMock = jest.fn();
  public infoMock = jest.fn();
  public warnMock = jest.fn();
  public errorMock = jest.fn();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(message: string, ...args: any[]): void {
    this.debugMock(message, args);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public info(message: string, ...args: any[]): void {
    this.infoMock(message, args);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(message: string, ...args: any[]): void {
    this.warnMock(message, args);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(message: string, ...args: any[]): void {
    this.errorMock(message, args);
  }
}
