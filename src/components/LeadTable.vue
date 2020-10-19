<template>
  <div class="lead-table">
    <div v-if="$vuetify.breakpoint.xsOnly">
      <v-card
        v-for="item in leadList"
        :key="item.id"
        class="mb-2"
        :ripple="false"
        @click="openLead(item)"
      >
        <v-card-text>
          <div>{{ getStatusByCode(item.leadStatus) }}</div>
          <div class="name">{{ item.customerInfo.name }}</div>
          <div>{{ item.job }}</div>
          <div>{{ item.customerInfo.phone }}</div>
          <div class="d-flex justify-space-between">
            <div>{{ item.updatedDate | formatDate }}</div>
            <div class="font-weight-bold">{{ item.price.symbol }}{{ item.price.amount }}</div>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="(header, index) in tableHeaders"
              :key="index"
              class="text-left"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in leadList"
            :key="item.id"
            @click="openLead(item)"
          >
            <td>{{ getStatusByCode(item.leadStatus) }}</td>
            <td class="name">{{ item.customerInfo.name }}</td>
            <td>{{ item.job }}</td>
            <td>{{ item.customerInfo.phone }}</td>
            <td>{{ item.price.symbol }}{{ item.price.amount }}</td>
            <td>{{ item.updatedDate | formatDate }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { State, Mutation } from 'vuex-class'
import { Component, Vue, } from 'vue-property-decorator'
import { LeadService } from '@/api/lead.service'
import * as types from '@/store/modules/lead/mutation-types'

const namespace: string = 'lead'

@Component({
  filters: {
    formatDate: (timestamp: string) => {
      if (!timestamp) return ''
      const date: Date = new Date(timestamp)
      return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`
    }
  },
  methods: {
    getStatusByCode: LeadService.getStatusByCode
  }
})
export default class LoginForm extends Vue {
  @State('list', { namespace })
  leadList!: Array<any>

  @Mutation(types.LEAD_SET_CURRENT, { namespace })
  setCurrentLead!: Function

  tableHeaders: Array<any> = [
    'Status',
    'Name',
    'Job',
    'Phone',
    'Value',
    'Updated'
  ]

  openLead(lead: any) {
    this.setCurrentLead(lead)
    this.$router.push('/lead/' + lead.id)
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables/_grid.scss';
.lead-table {
  .name {
    color: #1867C0;
  }

  .v-card {
    cursor: pointer;
    .v-card__text {
      color: rgba($color: #000, $alpha: 0.87);
    }
  }
  .v-data-table {
    background-color: transparent;
    overflow: hidden;
    tbody {
      tr {
        cursor: pointer;
      }
      td {
        background-color: #FFF;
      }
    }
  }
}
</style>
