<template>
  <v-container v-if="currentLead" class="lead-page py-0">
    <v-row>
      <v-col
        cols="12"
        sm="1"
        xs="12"
        :class="{ white: $vuetify.breakpoint.xsOnly }"
      >
        <v-btn
          :height="$vuetify.breakpoint.xsOnly ? undefined : 50"
          :width="$vuetify.breakpoint.xsOnly ? undefined : 74"
          color="white"
          class="blue--text"
          :icon="$vuetify.breakpoint.xsOnly"
          @click="$router.push('/')"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col
        class="pt-3"
        cols="12"
        sm="11"
        xs="12"
      >
        <h1>{{ currentLead.customerInfo.name }}</h1>
        <v-row class="pt-sm-2">
          <v-col
            class="py-1"
            cols="12"
            sm="5"
            xs="12"
          >
            <div>{{ currentLead.customerInfo.email }}</div>
            <div><a :href="'tel:' + currentLead.customerInfo.phone">{{ currentLead.customerInfo.phone }}</a></div>
          </v-col>
          <v-col
            class="address"
            cols="12"
            sm="5"
            xs="12"
          >
            <div><span>Service address: </span>{{ currentLead.serviceAddress }}</div>
            <div><span>Billing address: </span>{{ currentLead.billingAddress }}</div>
          </v-col>
        </v-row>
        <v-card>
          <v-card-text class="black--text">
            <div class="font-weight-bold mb-2">
              {{ currentLead.job }}
            </div>
            <v-row>
              <v-col
                cols="12"
                sm="3"
                xs="12"
              >
                <v-select
                  v-model="currentLead.leadStatus"
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
                  @change="updateLeadStatus"
                ></v-select>
              </v-col>
              <v-col
                class="pb-0"
                cols="12"
                sm="9"
                xs="12"
              >
                <v-text-field
                  v-model="currentLead.statusComment"
                  class="status-comment"
                  label="Add status comment"
                  outlined
                  flat
                  solo
                  dense
                  hide-details
                  height="48"
                  @change="updateLeadStatus"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { State, Action } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LeadService } from '@/api/lead.service'

const namespace: string = 'lead'

@Component({
  components: {
  },
  methods: {
    getStatusByCode: LeadService.getStatusByCode
  }
})
export default class Leads extends Vue {
  @State('currentLead', { namespace })
  currentLead: any

  @Action('item', { namespace })
  getItem: any
  
  @Action('updateItemStatus', { namespace })
  updateItemStatus: any

  statusList: Array<any> = Object.entries(LeadService.statusList).map(([key, value]) => ({ value: key, text: value }))
  
  beforeMount() {
    if (!this.currentLead || this.currentLead.id !== parseInt(this.$route.params.id)) {
      this.getItem(this.$route.params.id)
    }
  }

  updateLeadStatus() {
    this.updateItemStatus(this.currentLead)
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables/_grid.scss';

.lead-page {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  h1 {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    @media #{$media-sm-up} {
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
    }
  }

  .address {
    span {
      color: rgba($color: #000, $alpha: 0.36);
      display: block;

      @media #{$media-sm-up} {
        display: inline;
      }
    }
  }
}

</style>
