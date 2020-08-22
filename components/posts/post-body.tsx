import { RichText } from 'prismic-reactjs'

type Props = {
  content: string
}

export default function PostBody({ content }:Props) {
  return (
    <div className="max-w-2xl mx-auto mb-16">
        <RichText render={content} />
    </div>
  )
}