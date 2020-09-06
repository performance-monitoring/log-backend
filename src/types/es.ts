export interface IObject {
  [key: string]: any
}

export interface Indices {
  index: string
  include_type_name?: boolean
  wait_for_active_shards?: string
  timeout?: string
  master_timeout?: string
  body?: IObject
}