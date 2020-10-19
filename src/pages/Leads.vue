<template>
  <div class="leads-page">
    <v-container class="py-0">
      <v-row class="leads-page__header">
        <v-col
          class="d-flex justify-space-between align-center"
          :class="{ white: $vuetify.breakpoint.xsOnly }"
          cols="12"
          sm="7"
          xs="12"
        >
          <h1>Total {{ totalLeads }} leads</h1>
          <v-btn
            class="d-flex d-sm-none"
            icon
            color="#076DC1"
            @click="toggleMobileFilter(true)"
          >
            <v-icon>mdi-tune</v-icon>
          </v-btn>
        </v-col>

        <v-col
          class="leads-page__header__filters d-flex"
          cols="12"
          sm="5"
          xs="12"
        >
          <v-text-field
            class="search-input mr-2"
            v-model="search"
            :append-icon="$vuetify.breakpoint.xsOnly ? 'mdi-magnify' : ''"
            label="Search by name, phone or email"
            outlined
            flat
            solo
            dense
            hide-details
            height="48"
            @input="onSearchInput"
          ></v-text-field>

          <v-select
            class="status-select d-none d-sm-flex"
            v-model="status"
            append-icon="mdi-chevron-down"
            :items="statusList"
            label="Show all leads"
            outlined
            flat
            solo
            dense
            hide-details
            height="48"
            @change="onStatusSelect"
          ></v-select>
        </v-col>
      </v-row>

      <lead-table />

      <v-row>
        <v-col
          class="paginator"
          cols="12"
          xs="12"
        >
          <v-pagination
            v-if="totalPages"
            v-model="page"
            :length="totalPages"
            @input="loadList"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>

    <mobile-filter
      v-show="isShowMobileFilter"
      @on-close="toggleMobileFilter(false)"
    />
  </div>

</template>

<script lang="ts">
import { State, Action, Mutation } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { LeadService } from '@/api/lead.service'
import * as types from '@/store/modules/lead/mutation-types'
import { debounce } from '@/utils/debounce'
import LeadTable from '@/components/LeadTable.vue'
import MobileFilter from '@/components/MobileFilter.vue'

const leadNamespace: string = 'lead'

@Component({
  components: {
    LeadTable,
    MobileFilter
  }
})
export default class Leads extends Vue {
  @State('list', { namespace: leadNamespace })
  leadList!: Array<any>
  
  @State('currentPage', { namespace: leadNamespace })
  currentPage!: number

  @State('searchFilter', { namespace: leadNamespace })
  searchFilter!: string
  
  @State('statusFilter', { namespace: leadNamespace })
  statusFilter!: string

  @State('totalElements', { namespace: leadNamespace })
  totalLeads!: number

  @State('totalPages', { namespace: leadNamespace })
  totalPages!: number

  @Action('list', { namespace: leadNamespace })
  loadList!: Function

  @Mutation(types.LEAD_SET_SEARCH_FILTER, { namespace: leadNamespace })
  setSearchFilter!: Function

  @Mutation(types.LEAD_SET_STATUS_FILTER, { namespace: leadNamespace })
  setStatusFilter!: Function

  @Mutation(types.LEAD_SET_CURRENT_PAGE, { namespace: leadNamespace })
  setCurrentPage!: Function

  get search() {
    return this.searchFilter
  }

  set search(v) {}

  get status() {
    return this.statusFilter
  }

  set status(v) {}

  get page() {
    return this.currentPage
  }

  set page(value: number) {
    this.setCurrentPage(value)
  }
  
  isShowMobileFilter: boolean = false
  statusList: Array<any> = Object.entries(LeadService.statusList).map(([key, value]) => ({ value: key, text: value }))

  beforeMount() {
    if (!this.leadList.length) {
      this.loadList()
    }
    this.onSearchInput = debounce(this.onSearchInput, 500)
  }

  onSearchInput(value: string) {
    this.setSearchFilter(value)
    this.setCurrentPage(1)
    this.loadList()
  }

  onStatusSelect(value: string) {
    this.setStatusFilter(value)
    this.setCurrentPage(1)
    this.loadList()
  }

  toggleMobileFilter(isShow: boolean) {
    this.isShowMobileFilter = isShow
    if (isShow) {
      document.documentElement.classList.add('no-scroll')
    } else {
      document.documentElement.classList.remove('no-scroll')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables/_grid.scss';

.leads-page {
  &__header {
    h1 {
      font-family: Ubuntu;
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;

      @media #{$media-sm-up} {
        font-family: Roboto;
        font-size: 24px;
        line-height: 28px;
      }
    }

    &__filters {
      .search-input::v-deep {
        width: 260px;
      }

      .status-select::v-deep {
        width: 200px;
      }
    }
  }

  .paginator {
    @media #{$media-sm-up} {
      display: flex;
      padding: 40px 0 30px;
    }
  }
}

</style>
