import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants'
import GeneralMeta from '../general-meta'

const Meta = () => {
  return (
    <Head>
      <GeneralMeta />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
