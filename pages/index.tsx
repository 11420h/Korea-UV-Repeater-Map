import { Box, CssBaseline } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import SearchAppBar from 'components/SearchAppBar'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  const OlMapWithNoSSR = dynamic(()=> import("components/OlMap"), {ssr:false});

  return (
    <div className={styles.container}>
      <Head>
        <title>한국 아마추어 무선 중계기 지도</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="햄린이,아마추어,무선,무선통신,UHF,VHF,중계기,KARL,HAMRINI,공돌이파파,사랑해요,144Mhz,430Mhz,HAM,아마추어무선갤러리" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="한국 아마추어 무선 중계기 지도" />
        <meta property="og:site_name" content="아마추어무선갤러리" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main >
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CssBaseline />
          <SearchAppBar />
          <Box sx={{ flexGrow: 1, display: 'flex' }} >
            <Box sx={{ flexGrow: 1 }}>
              <OlMapWithNoSSR />
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  )
}

export default Home
