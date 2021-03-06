export abstract class Instrumenter {
  public changeSet: any;
  public abstract markEnd(): void;
  public abstract markLifecycle(name: string): void;
  public abstract markActionStart(name: string, queued: boolean): void;
  public abstract markActionEnd(name: string): void;
}
