import {Coin} from "./coin";
import * as bitcoinjs from "bitcoinjs-lib";
import {Seed} from "./seed";

export class Btc extends Coin{

  constructor(seed: Seed, net: "mainNet"|"testNet") {
    super(0, seed, net);
  }
  getNetwork(net: "mainNet" | "testNet") {
    switch (net) {
      case "testNet":
        return bitcoinjs.networks.testnet;
      case "mainNet":
        return bitcoinjs.networks.bitcoin;
    }
  }

  getAddress (account: number = 0, index: number = 0): string {
    const root = bitcoinjs.bip32.fromSeed(Buffer.from(this.seed.getSeed(), 'hex'));
    const path = this.getPath(account, index);
    const net = this.getNetwork(this.net);
    const temp = root.derivePath(path);
    return bitcoinjs.payments.p2pkh({pubkey: temp.publicKey, network: net}).address as string;
  }

  getPrivateKey (account: number = 0, index: number = 0) {
    const net = this.getNetwork(this.net);
    const root = bitcoinjs.bip32.fromSeed(Buffer.from(this.seed.getSeed(), 'hex'), net);
    const path = this.getPath(account, index);
    return root.derivePath(path).toWIF();
  }

  getPubKey (account: number = 0, index:number = 0) {
    const net = this.getNetwork(this.net);
    const root = bitcoinjs.bip32.fromSeed(Buffer.from(this.seed.getSeed(), 'hex'), net);
    const path = this.getPath(account, index);
    const pubkey = root.derivePath(path).publicKey;
    return pubkey.toString('hex');
  }

}