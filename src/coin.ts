import {Seed} from "./seed";

export abstract class Coin {
  private coinId: number
  private seed: Seed

  protected constructor(coinId: number, seed: Seed) {
    this.coinId = coinId;
    this.seed = seed;
  }

  setCoinId(coinId: number) {
    this.coinId = coinId
  }

  getCoinId(): number {
    return this.coinId
  }

  getPath(account: number, index: number): string {
    return `m/44'/${this.coinId}'/${account}'/0/${index}`;
  }

  abstract getAddress: string;

  abstract getPrivateKey: string;

  abstract getPubKey: string;
}