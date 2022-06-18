import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

const Home: NextPage = () => {
  const loggedIn = false
  if (!loggedIn) return <Login />
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Daily UI Challanges</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>I am under the Water</h1>
    </div>
  )
}

export default Home
