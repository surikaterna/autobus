import AutoBus from '../auto_bus';

export interface Listener<T> {
  (message: T): void;
}

export default class LocalTransport {
  constructor(bus: AutoBus);

  join<T>(channel: string, listener: Listener<T>): void;
  leave<T>(channel: string, listener: Listener<T>): void;
  publish<T>(channel: string, data: T): void;
  send<T>(channel: string, data: T): void;
}

