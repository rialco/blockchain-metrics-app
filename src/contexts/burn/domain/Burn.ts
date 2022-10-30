export class Burn {
  readonly senderAddress: string;
  readonly amount0: string;
  readonly amount1: string;
  readonly toAddress: string;

  constructor(
    senderAddress: string,
    amount0: string,
    amount1: string,
    toAddress: string
  ) {
    this.senderAddress = senderAddress;
    this.amount0 = amount0;
    this.amount1 = amount1;
    this.toAddress = toAddress;
  }
}
