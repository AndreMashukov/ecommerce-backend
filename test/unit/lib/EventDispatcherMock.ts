export class EventDispatcherMock {
  public dispatchMock = jest.fn();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dispatch(...args: any[]): void {
    this.dispatchMock(args);
  }
}
