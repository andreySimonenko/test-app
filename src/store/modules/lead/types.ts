export interface LeadState {
  list: any[]
  totalElements: number
  totalPages: number
  searchFilter: string,
  statusFilter: string,
  currentPage: number,
  currentLead?: any
  error?: boolean
}
