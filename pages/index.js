import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's build Airbnb</h1>
      <Header />
      {/* Banner */}
      {/* Explore */}
      {/* Live anywhere */}
    </div>
  );
}
