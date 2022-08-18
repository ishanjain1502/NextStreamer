import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Video from '../components/video';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>StreamX</title>
        <meta name="StreamX" content="A live streameing next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main' >
        <h1 className='flex justify-center h-screen relative top-8 text-3xl' > Watch the Live Stream Here </h1>
        <div>
        {/* <Video/> */}
        </div>
      </main>
    </div>
  )
}

export default Home
