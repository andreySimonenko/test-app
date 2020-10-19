import axios from 'axios'

const BASE_URL = 'https://test-contractorfinder.bradfordwhite.com/api/v2/contrlead'

const statusList: any = {
  NEW: 'New',
  DISMISSED: 'Dismissed',
  IN_PROGRESS: 'In Progress',
  ESTIMATE_SCHEDULED: 'Estimate Scheduled',
  PENDING_ACCEPTANCE: 'Pending Acceptance',
  SERVICE_SCHEDULED: 'Service Scheduled',
  COMPLETED: 'Completed',
  LOST: 'Lost'
}

const getStatusByCode = (code: string): string => statusList[code]

const getList = async (search?: string, status?: string, page: number = 0, size: number = 10): Promise<any> =>
  axios.get(BASE_URL + '/list', {
    params: {
      search,
      status,
      page,
      size
    }
  })

const getItem = async (id: number): Promise<any> =>
  axios.get(BASE_URL + '/' + id)

const updateItemStatus = async (lead: any): Promise<any> =>
  axios.post(BASE_URL, { ...lead })

export const LeadService = {
  statusList,
  getStatusByCode,
  getList,
  getItem,
  updateItemStatus
}
  