import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../date'
import CoverImage from '../cover-image'

type Props = {
  title: string,
  coverImage : Picture,
  date: any,
  excerpt: string,
  slug: string
}

type Picture = {
  url: string
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a className="hover:underline">
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}