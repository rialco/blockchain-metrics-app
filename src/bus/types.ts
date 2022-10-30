import Redis from 'ioredis';

export interface GenericBus {
  subscribe(): Promise<unknown>;
  unsubscribe(): Promise<unknown>;
  on(): Promise<void>;
}

export type IBus = Redis | GenericBus;
