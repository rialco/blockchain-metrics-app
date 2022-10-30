export class Swap {
  readonly senderAddress: string;
  readonly amount0In: string;
  readonly amount1In: string;
  readonly amount0Out: string;
  readonly amount1Out: string;
  readonly toAddress: string;

  constructor(
    senderAddress: string,
    amount0In: string,
    amount1In: string,
    amount0Out: string,
    amount1Out: string,
    toAddress: string
  ) {
    this.senderAddress = senderAddress;
    this.amount0In = amount0In;
    this.amount1In = amount1In;
    this.amount0Out = amount0Out;
    this.amount1Out = amount1Out;
    this.toAddress = toAddress;
  }
}
