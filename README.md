<img src="https://github.com/Curve-Labs/backend-challenge/blob/master/pics/curve.png" width="200" height="400" />


# Backend Developer Challenge, Curve Labs

Curve Labs, as a design and implementation laboratory, utilizes what we call component-integrative design, where we create, combine, and integrate components to form organizations that are more than the sum of their parts. This challenge is designed to test your capabilities at combining Ethereum modules in this fashion.

[Decentralized autonomous organizations](https://hackernoon.com/what-is-a-dao-c7e84aa1bd69), or DAOs for short, are blockchain-native organizations that can manage or govern a treasury or any Ethereum smart-contract. One framework we commonly work with is the DAOstack framework, whose DAO-modules are advanced enough to be used in production for clients of the Lab.

## Challenge

Take Balancer’s [configurable rights pool](https://github.com/balancer-labs/configurable-rights-pool), and integrate it as a [scheme](https://daostack.github.io/DAOstack-Hackers-Kit/gettingStarted/setupGenericScheme/) (or multiple schemes) into a DAO powered by [DAOstack’s Arc1.0](https://github.com/daostack/arc'). The DAO should be able to (1) create new smart pools using the constructor in  `ConfigurableRightsPool.sol` and (2) in govern the parameters of smart pools it has created using `ConfigurableRightsPool.sol`. We recommend reading Balancer’s [article on the topic](https://medium.com/balancer-protocol/building-liquidity-into-token-distribution-a49d4286e0d4). 

For the challenge, you will first be required to deploy a smart pool with `CRPFactory.sol`, and transfer its ownership to the DAO. From there, you can develop the DAOstack scheme that lets the DAO govern the pool. For ConfigurableRightsPool.sol, the DAO should be able to govern the following parameters for its pools:

- `setPublicSwap(bool publicSwap)` — DAO can pause or unpause the pool
- `setSwapFee(uint swapFee)` — DAO can set the pool’s swap fee 
upDateWeight(address token, uint newWeight) — DAO can update the weight of a pool token individually.
- `updateWeightsGradually(uint[] newWeights, uint startBlock, uint endBlock)` — DAO can transform all weights linearly to the new weights specified, setting the start and end blocks for the transformation. 
commitAddToken(address token, uint balance, uint denormalizedWeight) — DAO can precommit a new token to be applied addTokenTimeLockInBlocks blocks in the future.
- `applyAddToken()` — DAO can apply the token committed in the step above, and mint pool shares.
- `removeToken(address token)` — DAO can remove an existing token and return the balance to the controller.
- `whitelistLiquidityProvider(address provider)` — DAO can add an address, after which this address can join the pool. 
- `removeWhitelistedLiquidityProvider(address provider)`— DAO can remove an address, after which this address can no longer join a pool. 
- `joinPool(uint poolAmountOut, uint[] maxAmountsIn)` — DAO can add liquidity to the pool
- `exitPool(uint poolAmountIn, uint[] minAmountsOut)` — DAO can withdraw liquidity to the pool

For `ConfigurableRightsPool.sol`, the DAO should be able to create smart pools using the constructor:


- `createPool(uint initialSupply)` — DAO can create a new pool
- `createPool(uint initialSupply, uint minimumWeightChangeBlockPeriod, uint addTokenTimeLockInBlocks)` — DAO can  specify the block timing parameters (within limits), at pool creation time. They are fixed thereafter.


## Expectations and Assistance

We do not expect you to be able to do everything on your own to complete this challenge. DAOstack is a tricky DAO framework to work with, with many irritating idiosyncrasies for the developer environment. To this end, we have two developers internal to the lab who are available for providing support. We are also happy to spin up a Telegram group chat so you can ask questions in real-time to the team.

Telegram handles:

👨‍🦲Arseny — @arseny332 on Telegram, arsenyjin on Github

🐱‍💻Olivier — @osarrouy on Telegram and Github

🧙🏻‍♂️Doug — @dkent on Telegram, dkent600 on Github

## Submission

Fork the repo and open a new PR when ready, we will review the code and merge the PR from the successful candidate.

We don't expect the code to have the full test coverage but would like to see the functions being reasonably tested on the `Rinkeby` testnet.

## Reward

The first successful candidate to complete will receive a **2000 DAI** bounty from Curve Labs as well as a second-round interview with our team. We are looking to hire a back-end developer beginning November, 2020, but ongoingly seek out collaborators and contributors regardless. Payment of the bounty is contingent on the following conditions being met:

- The creation of a DAOstack DAO-governed Balancer configurable rights pool scheme where parameters are governable by the DAO.

- Creation and display of a minimal-viable-proposal UI (a .json configuration, [similar to this](https://github.com/Curve-Labs/necDAO-uniswap/blob/master/deployments/rinkeby/UniswapProxy_Implementation.json)) that appears in [Alchemy](https://alchemy.daostack.io/), DAOstack’s front-end interface for DAOs [Github](https://github.com/daostack/alchemy). The UI does not have to be detailed, but it should be clear that proposals can be submitted to (1) deploy a new pool factory, (2) deploy new pools, and (3) govern the parameters of pools deployed. [Here is an example](https://alchemy.daostack.io/dao/0x519b70055af55a007110b4ff99b0ea33071c720a/scheme/0x252d4c96bc18c6e0670f5cebeda40d6997688223d9498c8a61e0cb45c2c0a3ff/) of a UI for whitelisted tokens on a DEX in Alchemy:

![challengeUI](https://github.com/Curve-Labs/backend-challenge/blob/master/pics/challengeUI.png =200x200)

- Submission and execution of three proposals in a toy DAO: (1) creation of a new pool factory, (2) deployment of a new smart pool, and (3) adjusting the parameters of the deployed smart pool.


- Merger of the aforementioned into the Curve Labs repository under an open-source license.


Acceptance of the bounty will require the approval of Curve Labs’ Director, [Pat Rawson](https://github.com/papa-raw). A formal invoice will need to be issued to the Lab, with payment directions provided thereof. Please direct any questions relating to this challenge to contact@curvelabs.eu ➰


## Bonus

The following bonuses are not required but would certainly amaze the team and designate the applicant as a stand-out candidate.

1️⃣ Deploy a version of the DAO with the Balancer Pool scheme to (xDAI Chain)[https://www.xdaichain.com/].

2️⃣ Create a DAOstack scheme where the DAO can create a factory contract `CRPFactory.sol`. For this bonus, no interface development is required. For `CRPFactory.sol`, the DAO should be able to set the following parameters when creating a new smart pool factory:

- The following boolean permissions:

	- `canPauseSwapping`
	- `canChangeSwapFee`
	- `canChangeWeights`
	- `canAddRemoveTokens`
	- `canWhitelistLPs`
	- `canChangeCap`
	- `canRemoveAllTokens`

- The following pool parameters:

	- `string tokenSymbol` - Symbol of the Balancer Pool Token representing this pool
	- s`tring tokenName` - Name of the Balancer Pool Token representing this pool
	- `address[] tokens` - Array of 2-8 token addresses. The pool will hold these.
	- `uint256[] startBalances` - Array of initial balances for the tokens specified above.
	- `uint256[] startWeights` - Array of initial weights for the tokens specified above.
	- `uint swapFee` - Initial swap fee for the pool (subject to min/max limits)

- And the pool factory address, `address factoryAddress`








