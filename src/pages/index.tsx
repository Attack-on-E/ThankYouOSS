import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Start from "./start";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thank you OSS</title>
        <meta
          name="description"
          content="Logical Thinking Skills Learning App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center bg-gray-200">
        Thank you OSS app
      </div>
    </div>
  );
};

export default Home;
