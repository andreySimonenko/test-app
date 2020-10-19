import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { LeadState } from './types'
import { RootState } from '../../types'

export const state: LeadState = {
  list: [],
  totalElements: 0,
  totalPages: 0,
  searchFilter: '',
  statusFilter: '',
  currentPage: 1,
  currentLead: undefined,
  error: false
}

const namespaced: boolean = true

export const lead: Module<LeadState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}