import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* <Banner /> */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const products = await fetch(
    `https://fakestoreapi.com/products`
  ).then((res) => res.json());

  return {
    props: { products }, // will be passed to the page component as props
  };
}
