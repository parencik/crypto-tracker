import { mapFetchedCryptos } from '../../../shared/utils/helpers';

const mockedCryptos = {
  data: {
    data: {
      '1': {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        website_slug: 'bitcoin',
        rank: 1,
        circulating_supply: 17008162.0,
        total_supply: 17008162.0,
        max_supply: 21000000.0,
        quotes: {
          USD: {
            price: 9024.09,
            volume_24h: 8765400000.0,
            market_cap: 153483184623.0,
            percent_change_1h: -2.31,
            percent_change_24h: -4.18,
            percent_change_7d: -0.47,
          },
        },
        last_updated: 1525137271,
      },
      '1027': {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        website_slug: 'ethereum',
        rank: 2,
        circulating_supply: 99151888.0,
        total_supply: 99151888.0,
        max_supply: null,
        quotes: {
          USD: {
            price: 642.399,
            volume_24h: 2871290000.0,
            market_cap: 63695073558.0,
            percent_change_1h: -3.75,
            percent_change_24h: -7.01,
            percent_change_7d: -2.32,
          },
        },
        last_updated: 1525137260,
      },
      '1831': {
        id: 1831,
        name: 'Bitcoin Cash',
        symbol: 'BCH',
        website_slug: 'bitcoin-cash',
        rank: 4,
        circulating_supply: 17223738.0,
        total_supply: 17223738.0,
        max_supply: 21000000.0,
        quotes: {
          USD: {
            price: 734.823,
            volume_24h: 357992000.0,
            market_cap: 12656398461.0,
            percent_change_1h: 0.12,
            percent_change_24h: 1.22,
            percent_change_7d: -1.76,
          },
        },
        last_updated: 1530942734,
      },
    },
  },
};

const cryptos = mockedCryptos.data.data;
const mappedMockedCryptos = mapFetchedCryptos(cryptos);

export { mockedCryptos, mappedMockedCryptos };
