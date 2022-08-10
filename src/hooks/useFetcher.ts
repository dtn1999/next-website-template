import { fetcher } from "@app/lib";
import { Variables } from "graphql-request";
import useSWR, { SWRConfiguration } from "swr";

export function useFetcher(query:string, variables?:Variables, config?: SWRConfiguration){
  return useSWR([query, variables], async () => {
    return fetcher(query, variables)
  },config)
}