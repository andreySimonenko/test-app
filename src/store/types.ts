import { AuthState } from './modules/auth/types'
import { LeadState } from './modules/lead/types'

export interface RootState {
  version: string,
  auth?: AuthState,
  lead?: LeadState
}
