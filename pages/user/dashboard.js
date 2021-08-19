import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Dashboard() {
  const Router = useRouter();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (user.status === false) {
      Router.replace("/user/login");
    }
  });

  return (
    <div>
      <Head>
        <title>Authenticated page</title>
        <meta name="description" content="Authenticated page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <Header />
        <div style={{ width: "70%", margin: "auto" }}>
          {user.status === false ? (
            <p>This route is authenticated. Please login to view the page</p>
          ) : (
            <div>
              <p>Name: {user.username}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
