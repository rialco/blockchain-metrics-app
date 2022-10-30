export interface ControllerPayload {
  channel: string;
  data: Record<string, any>;
  type: string;
}

export interface Controller {
  run(payload: ControllerPayload): void;
}
