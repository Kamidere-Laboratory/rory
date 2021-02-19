export interface BaseEventIo {
  register: () => Promise<void>;
  unregister: () => Promise<void>;
  handler: (...any) => Promise<any>;
}
