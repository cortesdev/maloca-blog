import { useEffect } from 'react'
import Head from 'next/head';
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { Loader } from '../components/organisms/Loader';
import { inter, maloca, orbitron } from '../utils/fonts';
import Smartlook from 'smartlook-client'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)



  useEffect(() => {
    // Initialize Smartlook with URL interceptor
    Smartlook.init('b8d3218cfb5c3b4885eb5f77d8143ffef0ca4e4d',
      undefined,
      () => console.log('Smartlook is now initialized'), {
      region: 'eu',
      interceptors: {
        url: (data) => {
          const tokenIndex = data.url.indexOf('tokenId=');
          if (tokenIndex > -1) {
            data.url = data.url.slice(0, tokenIndex) + 'tokenId=[OBSCURED]';

          }
        }
      }
    });
  }, []);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Welcome to {CMS_NAME}</title>
        </Head>
        <style style jsx global> {`
        :root {
          --orbitron-font: ${orbitron.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
          --maloca-font: ${maloca.style.fontFamily};
        }
      `}</style >
        <Container>
          <Loader />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1,
  }
}
