import {GraphQLClient, Variables} from "graphql-request"

const cmsEndpoint = String(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)
const authToken = String(process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN)
const previewAuthToken = String(process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN_PREVIEW)

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(cmsEndpoint, {
        headers: {
            Authorization: `Bearer ${preview ? previewAuthToken: authToken}`
        }
    })
}

export const hygraph = createHygraphClient(false)

export function fetcher(query:string, variables?:Variables){
    console.log(query)
   return hygraph.request(query, variables)
}
