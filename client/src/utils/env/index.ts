import type { IENV } from './typed'

console.log('======> NODE_ENV:', process.env.NODE_ENV)

export const ENV = {
  ...import.meta.env,
  VITE_ENABLE_MSW: import.meta.env?.VITE_ENABLE_MSW === 'true',
} as IENV

export type { IENV }
