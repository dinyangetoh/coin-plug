import {fetcher} from "../helpers/request.helper";
import useSWR from 'swr'

interface ApiHook<T> {
  data?: T
}

export function useApi<T>(
  uri: string
): ApiHook<T> {
  const {data} = useSWR(
    uri,
    fetcher
  )
  return {
    data
  }
}
