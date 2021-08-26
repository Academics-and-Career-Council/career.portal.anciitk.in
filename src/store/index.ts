import {Role} from '../services/abac'
import {atom} from 'recoil'

export const SESSION_STATE = atom({
  key: "SESSION_STATE",
  default: {active: false, role: Role.ADMIN}
})

export const SCREEN_STATE = atom({
  key: "SCREEN_STATE",
  default: {onMobile: window.screen.width < 600}
})