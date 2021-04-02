import {Seed} from "./seed";

export abstract class Coin {
  protected coinId: number
  protected seed: Seed
  protected net: "mainNet"|"testNet"

  protected constructor(coinId: number, seed: Seed, net: "mainNet"|"testNet") {
    this.coinId = coinId;
    this.seed = seed;
    this.net = net;
  }

  setCoinId(coinId: number) {
    this.coinId = coinId
  }

  getCoinId(): number {
    return this.coinId
  }

  getPath(account: number, index: number): string {
    switch (this.net) {
      case "testNet":
        return `m/44'/1'/${account}'/0/${index}`;
      case "mainNet":
        return `m/44'/${this.coinId}'/${account}'/0/${index}`;
    }
  }

  abstract getAddress(account: number, index: number): string;

  abstract getPrivateKey(account: number, index: number): string;

  abstract getPubKey(account: number, index: number): string;
}