/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosError } from 'axios'

export class ClickhouseHttpError extends Error {
  status?: number
  statusText?: string
  headers: Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: Record<any, any>

  constructor (error: AxiosError['response']) {
    super()
    this.message = error?.data
    this.status = error?.status
    this.statusText = error?.statusText
    this.headers = error?.headers
    this.config = error?.config
  }
}