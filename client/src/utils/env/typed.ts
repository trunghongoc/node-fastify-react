export interface IENV {
  BASE_URL: string
  DEV: boolean
  PROD: boolean
  SSR: boolean
  MODE: 'development' | 'production'
  VITE_ENABLE_MSW: boolean
}
