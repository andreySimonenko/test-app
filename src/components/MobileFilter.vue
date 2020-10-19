<template>
  <div>
    <v-container class="mobile-filter d-flex flex-column">
      <div class="d-flex justify-space-between">
        <h1 class="d-flex align-center">Filter:</h1>
        <v-btn
          icon
          color="#94A2B2"
          @click="$emit('on-close')"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="mt-5">
        <v-select
          v-model="status"
          class="status-select"
          append-icon="mdi-chevron-down"
          :items="statusList"
          label="Status"
          outlined
          flat
          solo
          dense
          hide-details
          height="48"
          @change="onStatusSelect"
        ></v-select>
      </div>

      <div class="mt-auto mb-5 text-center">
        <a @click="resetAll">Reset all</a>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { State, Mutation, Action } from 'vuex-class'
import { Component, Vue, } from 'vue-property-decorator'
import { LeadService } from '@/api/lead.service'
import * as types from '@/store/modules/lead/mutation-types'

const leadNamespace: string = 'lead'

@Component
export default class MobileFilter extends Vue {
  @State('statusFilter', { namespace: leadNamespace })
  statusFilter!: string

  @Mutation(types.LEAD_SET_SEARCH_FILTER, { namespace: leadNamespace })
  setSearchFilter!: Function

  @Mutation(types.LEAD_SET_STATUS_FILTER, { namespace: leadNamespace })
  setStatusFilter!: Function

  @Mutation(types.LEAD_SET_CURRENT_PAGE, { namespace: leadNamespace })
  setCurrentPage!: Function

  @Action('list', { namespace: leadNamespace })
  loadList!: Function

  get status() {
    return this.statusFilter
  }

  set status(v) {}

  statusList: Array<any> = Object.entries(LeadService.statusList).map(([key, value]) => ({ value: key, text: value }))

  onStatusSelect(value: string) {
    this.setStatusFilter(value)
    this.setCurrentPage(1)
    this.loadList()
  }

  resetAll() {
    this.setSearchFilter('')
    this.setStatusFilter('')
    this.setCurrentPage(1)
    this.loadList()
  }
}
</script>

<style lang="scss" scoped>
.mobile-filter {
  background-color: white;
  position: fixed;
  top: 55px;
  width: 100%;
  z-index: 999;
  height: calc(100% - 55px);
  padding: 17px 16px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }
}

</style>
