import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { logout } from "../redux/user";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <Head>
        <title>Non Authenticated home page</title>
        <meta name="description" content="Non Authenticated home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      <div className={styles.container}>
        <p>Welcome to the home page. This is a non authenticated route.</p>
        {/* {user.status === false ? (
          <Login />
        ) : (
          <>
            <p>Hello {user.username}</p>
            <button
              onClick={() => {
                dispatch(logout());
              }}
              className={styles.button}
            >
              Logout
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}
