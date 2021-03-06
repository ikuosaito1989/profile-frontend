import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/src/store/portfolios.js'

describe('portfolios', () => {
  lazy(
    'store',
    () =>
      new Vuex.Store({
        state,
        actions,
        getters,
        mutations
      })
  )

  lazy('mockPortfolios', () => require('@/test/fixtures/portfolios.json'))
  lazy(
    'mockSelectedPortfolios',
    () => require('@/test/fixtures/portfolios.json')[0]
  )

  test('Store instance is generated', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('showPortfolios', () => {
      subject(() => actions.showPortfolios.bind({ $axios })(lazy('context')))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/portfolios').reply(
          200,
          lazy('mockPortfolios')
        )
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('setPortfolios', {
          portfolios: lazy('mockPortfolios')
        })
      })
    })

    describe('selectPortfolio', () => {
      subject(() =>
        actions.selectPortfolio.bind({ $axios })(lazy('context'), {
          portfolioId: 1
        })
      )

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/portfolios/1').reply(
          200,
          lazy('mockPortfolios')
        )
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith(
          'setSelectedPortfolio',
          {
            selectedPortfolio: lazy('mockSelectedPortfolios')
          }
        )
      })
    })
  })

  describe('Getter', () => {
    describe('portfolios', () => {
      subject(() => getters.portfolios(lazy('mockState')))

      lazy('mockState', () => ({
        portfolios: lazy('mockPortfolios')
      }))

      test('ポートフォリオが返ること', () => {
        expect(subject()).toBe(lazy('mockPortfolios'))
      })
    })

    describe('selectedPortfolio', () => {
      subject(() => getters.selectedPortfolio(lazy('mockState')))

      lazy('mockState', () => ({
        selectedPortfolio: lazy('mockPortfolios')
      }))

      test('選択中のポートフォリオが返ること', () => {
        expect(subject()).toBe(lazy('mockPortfolios'))
      })
    })
  })

  describe('Mutation', () => {
    describe('setPortfolios', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setPortfolios(lazy('mockState'), {
          portfolios: lazy('mockPortfolios')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').portfolios).toBe(lazy('mockPortfolios'))
      })
    })

    describe('setSelectedPortfolio', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setSelectedPortfolio(lazy('mockState'), {
          selectedPortfolio: lazy('mockPortfolios')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').selectedPortfolio).toBe(lazy('mockPortfolios'))
      })
    })
  })
})
