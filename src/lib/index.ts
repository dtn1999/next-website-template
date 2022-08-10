import { request } from "graphql-request";
import {GraphQLClient} from "graphql-request"

const cmsEndpoint = String(process.env.GRAPHCMS_ENDPOINT)
const authToken = String(process.env.GRAPHCMS_TOKEN)
const previewAuthToken = String(process.env.GRAPHCMS_TOKEN_PREVIEW)

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(cmsEndpoint, {
        headers: {
            Authorization: `Bearer ${preview ? previewAuthToken: authToken}`
        }
    })
}

export const hygraph = createHygraphClient(false)