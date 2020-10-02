import LocalTransport, { Listener } from './local/local_transport';

export interface Middleware<T> {
  (message: T, next: NextFunc<T>): void;
}

export interface NextFunc<T> {
  (error: Error | null, message: T): void;
}

export default class AutoBus {
  constructor(transport: LocalTransport);

  join<T>(channel: string, listener: Listener<T>): void;
  leave<T>(channel: string, listener: Listener<T>): void;
  publish<T>(channel: string, message: T): void;
  send<T>(channel: string, message: T): void;
  use<T>(middleware: Middleware<T>): void;
  _deliver<T>(message: T, listener: Listener<T>): void;
}
