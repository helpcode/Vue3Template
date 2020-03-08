export interface SetupContext {
  readonly root: { [key: string]: (...args: any[]) => any };
}