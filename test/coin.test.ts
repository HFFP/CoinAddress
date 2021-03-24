import {Coin} from "../src/coin";

describe("coin class", () => {
  test("new", () => {
    const btcCoin = new Coin(1);
    expect(btcCoin.getCoinId()).toBe(1);
  })
})