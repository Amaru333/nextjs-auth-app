import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";
import Head from "next/head";

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <Head>
        <title>Authenticated page</title>
        <meta name="description" content="Authenticated page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <Navbar />
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
