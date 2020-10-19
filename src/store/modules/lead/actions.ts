import { ActionTree } from 'vuex'
import { LeadState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'
import { LeadService } from '@/api/lead.service'

export const actions: ActionTree<LeadState, RootState> = {
  list({ state, commit }) {
    LeadService.getList(state.searchFilter, state.statusFilter, state.currentPage - 1).then(data => {
      commit(types.LEAD_SET_LIST, data.items)
      commit(types.LEAD_SET_TOTAL_ELEMENTS, data.totalElements)
      commit(types.LEAD_SET_TOTAL_PAGES, data.totalPages)
    }, error => {
      console.log(error)
    })
  },
  item({ state, commit }, id: number) {
    LeadService.getItem(id).then(data => {
      commit(types.LEAD_SET_CURRENT, data.item)
    }, error => {
      console.log(error)
    })
  },
  updateItemStatus({ commit }, lead: any) {
    LeadService.updateItemStatus(lead).then(data => {
      commit(types.LEAD_SET_CURRENT, lead)
    })
  }
}