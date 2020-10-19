import { ActionTree } from 'vuex'
import { AuthState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'
import { AuthService } from '@/api/auth.service'

export const actions: ActionTree<AuthState, RootState> = {
  setAuthStatus({ commit}, status) {
    commit(types.AUTH_SET_STATUS, status)
    localStorage.setItem('isAuth', status ? '1' : '0')
  },
  login({ dispatch }, { email, password }) {
    return AuthService.login(email, password).then(status => {
      if (status) {
        dispatch('setAuthStatus', true)
      }
      return status
    })
  },
  logout({ dispatch }) {
    dispatch('setAuthStatus', false)
    AuthService.logout()
  }
}
