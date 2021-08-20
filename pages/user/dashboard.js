import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import Login from "../../components/Login";

export default function Dashboard() {
  const Router = useRouter();
  const user = useSelector((state) => state.user.value);

  const [userStatus, setUserStatus] = useState(true);

  useEffect(() => {
    setUserStatus(user.status);
  }, [user.status]);

  useEffect(() => {
    if (userStatus === false) {
      Router.replace("/user/login");
    }
  }, []);

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
            <div style={{ textAlign: "-webkit-center", marginTop: "40px" }}>
              <Login />
            </div>
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
