import Head from 'next/head';
import { HomeScreen } from '../screen';


export default function Home() {
  return (
    <>
      <Head>
        <title>Testing page</title>
      </Head>
      <main>
        <HomeScreen />
      </main>
    </>
  );
}