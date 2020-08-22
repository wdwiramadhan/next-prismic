import Container from '../components/layouts/container'
import Layout from '../components/layouts/layout'
import Header from '../components/layouts/header'
import Posts from '../components/posts/posts'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({  allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Prismic</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { allPosts },
  }
}