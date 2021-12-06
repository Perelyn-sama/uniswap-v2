const BN = require("bn.js");
const IERC20 = artifacts.require("IERC20");
const TestUniswap = artifacts.require("TestUniswap");

contract("TestUniswap", (accounts) => {
  const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f";
  const DAI_WHALE = "0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3";
  const WBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";

  const WHALE = DAI_WHALE;
  const AMOUNT_I = new BN(10).pow(new BN(18)).mul(new BN(100000)); // 1,000,000 DAI
  const AMOUNT_OUT_MIN = 1;
  const TOKEN_IN = DAI;
  const TOKEN_OUT = WBTC;
  const TO = accounts[0];

  it("Should swap", async () => {
    const tokenIn = await IERC20.at(TOKEN_IN);
    const tokenOut = await IERC20.at(TOKEN_OUT);
    const testUniswap = await TestUniswap.new();
  });
});
