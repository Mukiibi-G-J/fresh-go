import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FreshGo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Feed />
      </main>

      <footer></footer>
    </div>
  );
}
