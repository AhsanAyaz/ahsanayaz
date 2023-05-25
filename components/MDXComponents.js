/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import ImageWithBg from '@/components/ImageWithBg'
import PromotionBanner from '@/components/PromotionBanner'
import EmbeddedYouTubeVideo from '@/components/EmbeddedYouTubeVideo'
import BuyMeACoffee from '@/components/BuyMeACoffee'
import IonicCourse from '@/components/IonicCourse'
import CustomLink from '@/components/Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  ImageWithBg,
  IonicCourse,
  PromotionBanner,
  EmbeddedYouTubeVideo,
  BuyMeACoffee,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
