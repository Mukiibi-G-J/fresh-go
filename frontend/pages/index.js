import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import TopCategory from "../components/TopCategory";
import Category from "../components/Categories";

export default function Home({ products }) {
  // console.log(products);
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
        <TopCategory />
        
        <Category products={products} />
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
