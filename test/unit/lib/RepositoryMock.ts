export class RepositoryMock<T> {
  public one: T;
  public list: T[];

  public findMock = jest.fn();
  public findOneMock = jest.fn();
  public saveMock = jest.fn();
  public deleteMock = jest.fn();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public find(...args: any[]): Promise<T[]> {
    this.findMock(args);
    return Promise.resolve(this.list);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public findOne(...args: any[]): Promise<T> {
    this.findOneMock(args);
    return Promise.resolve(this.one);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public save(value: T, ...args: any[]): Promise<T> {
    this.saveMock(value, args);
    return Promise.resolve(value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public delete(value: T, ...args: any[]): Promise<T> {
    this.deleteMock(value, args);
    return Promise.resolve(value);
  }
}
