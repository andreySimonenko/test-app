import { MutationTree } from 'vuex'
import { AuthState } from './types'
import * as types from './mutation-types'

export const mutations: MutationTree<AuthState> = {
  [types.AUTH_SET_STATUS] (state, status: boolean) {
    state.isAuthStatus = status
  }
}
