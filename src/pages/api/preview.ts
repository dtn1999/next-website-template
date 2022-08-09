import type {NextApiRequest, NextApiResponse} from "next"
const NEXT_PREVIEW_TOKEN = String(process.env.NEXT_REVIEW_TOKEN);

export default async function handlePreviewRequests(req: NextApiRequest, res:NextApiResponse) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    const { secret, itemId , typename} = req.query;
    if (req.query.secret !== NEXT_PREVIEW_TOKEN || !req.query.slug) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    // Fetch the headless CMS to check if the provided `id` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS
    const item = { id: 1}
  
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!item) {
      return res.status(401).json({ message: 'Invalid slug' })
    }
  
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
        typename,
        itemId
    })
  
    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // use type name to redirect to the right preview page
    res.redirect(`/preview/${typename}/${item.id}`)
  }