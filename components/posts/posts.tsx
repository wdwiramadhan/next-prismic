import PostPreview from './post-preview'

type Props = {
  posts : any
}

export default function Posts({ posts }:Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}