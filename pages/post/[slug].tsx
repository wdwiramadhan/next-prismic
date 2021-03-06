import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/layouts/container'
import PostBody from '../../components/posts/post-body'
import Posts from '../../components/posts/posts'
import Header from '../../components/layouts/header'
import PostHeader from '../../components/posts/post-header'
import Layout from '../../components/layouts/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/posts/post-title'
import {CMS_NAME} from '../../lib/constants'
import SectionSparator from '../../components/section-sparator'

export default function Post({ post, morePosts}) {
  const router = useRouter()
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[0].text} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.coverimage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverimage}
                date={post.date}
                author={post.author}
                slug={post._meta.uid}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSparator/>
            {morePosts && morePosts.length > 0 && (
              <Posts posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ node }) => `/post/${node._meta.uid}`) || [],
    fallback: true,
  }
}