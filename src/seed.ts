import * as bitcoinjs from "bitcoinjs-lib";
import * as bip39 from 'bip39';

export class Seed {
  static validateMnemonic(mnemonicWords: string) {
    return bip39.validateMnemonic(mnemonicWords);
  }

  private readonly mnemonicWords: string;
  private readonly seed: string;

  constructor(options: { mnemonicWords?: string, length?: 12 | 24 } = {}) {
    if (options.mnemonicWords && !bip39.validateMnemonic(options.mnemonicWords)) {
      throw Error("mnemonic words error, please check you input is correct")
    }
    this.mnemonicWords = options.mnemonicWords || bip39.generateMnemonic(options.length === 24 ? 256 : 128);
    this.seed = bip39.mnemonicToSeedSync(this.mnemonicWords).toString('hex');
  }

  getMnemonicWords() {
    return this.mnemonicWords;
  }

  getSeed() {
    return this.seed;
  }
}