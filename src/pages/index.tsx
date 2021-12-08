import type { NextPage } from "next";
import Head from "next/head";
import { useState, ChangeEvent } from "react"
import { TextField, Box, Card } from "@material-ui/core"
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  const [userName, setUserName] = useState("${user-name}");
  const [repoName, setRepoName] = useState("${repo-name}");

  const handleChangeRepoName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event === undefined) return;
    if (event.currentTarget === null) return;
    setRepoName(event.target.value);
  };
  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event === undefined) return;
    if (event.currentTarget === null) return;
    setUserName(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thank You OSS</title>
      </Head>

      <div className="w-screen h-full flex justify-center bg-gray-200">
        <div className="w-3/4 h-3/5 mt-24 bg-fire-img">
          <h1 className="font-lato text-4xl">Let's tell thanks to OSS developers!</h1>

          <div className="m-6 text-center block">
            <img src="https://thankyouoss.herokuapp.com/thank/Attack-on-E/ThankYouOSS.svg" alt="thank OSS" />
          </div>

          <Card variant="outlined">
            <div className="m-12 mb-6 text-lg">Get Start</div>
            <div className="flex gap-6 mx-12">
              <TextField label="org/user name" onChange={handleChangeUserName} />
              <TextField label="repository name" onChange={handleChangeRepoName} />
            </div>

            <Box className="m-12 mt-6">
              <div className="p-6 rounded block bg-gray-100">
                {`<img src="https://thankyouoss.herokuapp.com/thank/${userName}/${repoName}.svg" alt="thank OSS" />`}
              </div>
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
