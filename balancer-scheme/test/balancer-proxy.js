const { expect } = require('chai');
const { BN, balance, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const helpers = require('./helpers');
const Controller = artifacts.require('Controller');

const deploy = async (accounts) => {
  // initialize test setup
  const setup = await helpers.setup.initialize(accounts[0]);
  // deploy WETH and ERC20s
  setup.tokens = await helpers.setup.tokens(setup);
  // deploy DAOStack meta-contracts
  setup.DAOStack = await helpers.setup.DAOStack(setup);
  // deploy organization
  setup.organization = await helpers.setup.organization(setup);
  // deploy proxy
  setup.proxy = await helpers.setup.proxy(setup);
  // deploy generic scheme
  setup.scheme = await helpers.setup.scheme(setup);
  //TODO: deploy balancer infrastructure

  return setup;
};

contract('BalancerProxy', (accounts) => {
  let setup;
  beforeEach('!! deploy setup', async () => {
    setup = await deploy(accounts);
  });
  context('» test contract', () => {
    //TODO: test proxy
  });
 });
