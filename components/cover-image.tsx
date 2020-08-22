import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title :string,
  url : string,
  slug : string
}
export default function CoverImage({ title, url, slug }:Props) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}