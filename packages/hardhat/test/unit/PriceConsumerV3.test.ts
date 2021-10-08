import { ethers, deployments, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { expect } from 'chai';
import skip from 'mocha-skip-if';
import { developmentChains } from '../../helper-hardhat-config';
import { PriceConsumerV3 } from 'types/typechain'

skip.if(!developmentChains.includes(network.name)).
  describe('PriceConsumer Unit Tests', () => {
    let priceConsumerV3: PriceConsumerV3;

    beforeEach(async () => {
      await deployments.fixture(['mocks', 'feed']);
      const PriceConsumerV3 = await deployments.get('PriceConsumerV3');
      priceConsumerV3 = await ethers.getContractAt('PriceConsumerV3', PriceConsumerV3.address) as unknown as PriceConsumerV3;
    });

    it('should return a positive value', async () => {
      let result = await priceConsumerV3.getLatestPrice();
      expect(result.gt(BigNumber.from(0))).to.be.true;
    });
  });