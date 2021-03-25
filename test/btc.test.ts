import {Seed} from "../src/seed";
import {Btc} from "../src/btc";
import {bitcoin} from "bitcoinjs-lib/types/networks";

describe("coin class", () => {

  const mnemonicWords = "proud visit session garlic cube gain basket script flash divide theory test";
  const seed = new Seed({mnemonicWords});

  test("new", () => {
    const btcCoin = new Btc(seed, "mainNet");
    expect(btcCoin.getCoinId()).toBe(0);
  })

  test("getAddress", () => {
    const btc = new Btc(seed, "mainNet");
    const address = btc.getAddress(0, 0);
    expect(address).toBe("1H9HuDxM77y98eNBhnVSoVnJvwcKsL4VMD")
  })
})