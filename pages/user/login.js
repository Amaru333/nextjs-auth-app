import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import Login from "../../components/Login";

export default function Dashboard() {
  const Router = useRouter();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (user.status === true) {
      Router.replace("/");
    }
  });

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <Header />
        <div
          style={{
            width: "70%",
            margin: "auto",
            textAlign: "-webkit-center",
            paddingTop: "50px",
          }}
        >
          <Login />
        </div>
      </div>
    </div>
  );
}
