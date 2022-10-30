export class Pair {
  readonly token0Address: string;
  readonly token1Adress: string;
  readonly pairAddress: string;
  readonly pairIdx: string;

  constructor(
    token0Address: string,
    token1Adress: string,
    pairAddress: string,
    pairIdx: string
  ) {
    this.token0Address = token0Address;
    this.token1Adress = token1Adress;
    this.pairAddress = pairAddress;
    this.pairIdx = pairIdx;
  }
}
