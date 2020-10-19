import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { AuthState } from './types'
import { RootState } from '../../types'

export const state: AuthState = {
  isAuthStatus: !!parseInt(localStorage.getItem('isAuth') || '') || false,
  error: false
}

const namespaced: boolean = true

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}