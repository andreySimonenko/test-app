import axios, { AxiosRequestConfig } from 'axios'
import store from '@/store'
import { Store } from 'vuex'
import { RootState } from '@/store/types'

const createCheckAuthStatus = (store: Store<RootState>) => (response: any) => {
  if (response.data && response.data.result === 'ERROR') {
    const techMessages = Array.isArray(response.data.techMessages) && response.data.techMessages.length ? response.data.techMessages[0] : ''
    if (techMessages.includes('403')) {
      store.dispatch('auth/setAuthStatus', false, { root: true })
      console.error(techMessages)
    }
    return false
  }
  if (response.data && response.data.result === 'SUCCESS') {
    return response.data.data
  }
}

const checkAuthStatus = createCheckAuthStatus(store)

export default function setup() {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.withCredentials = true
    return config
  })
  axios.interceptors.response.use(checkAuthStatus)
}
