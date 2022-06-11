// TODO: create a function to get the login status of the user and pass it to 'getServerSideProps' function

import Head from "next/head";
import { useState } from "react";
import LoginForm from "../comp/LoginForm";
import Main from "../comp/Main";

export default function Home(props) {
  const [log, setLog] = useState(props.log);

  return (
    <>
      <Head>
        <title>my day</title>
        <meta name="description" content="Organize your day" />
      </Head>
      {log ? <Main /> : <LoginForm />}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      log: true,
    },
  };
}
