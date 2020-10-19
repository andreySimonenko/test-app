import { MutationTree } from 'vuex'
import { LeadState } from './types'
import * as types from './mutation-types'

export const mutations: MutationTree<LeadState> = {
  [types.LEAD_SET_CURRENT](state, lead: any) {
    state.currentLead = lead
  },
  [types.LEAD_SET_LIST](state, list: any[]) {
    state.list = list
  },
  [types.LEAD_SET_TOTAL_ELEMENTS](state, totalElements: number) {
    state.totalElements = totalElements
  },
  [types.LEAD_SET_TOTAL_PAGES](state, totalPages: number) {
    state.totalPages = totalPages
  },
  [types.LEAD_SET_SEARCH_FILTER](state, search: string) {
    state.searchFilter = search
  },
  [types.LEAD_SET_STATUS_FILTER](state, status: string) {
    state.statusFilter = status
  },
  [types.LEAD_SET_CURRENT_PAGE](state, page: number) {
    state.currentPage = page
  }
}
