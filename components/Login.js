import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import styles from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>Login</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Username"
        onChange={handleUsername}
      />
      <button
        onClick={() => {
          dispatch(login({ username: username, status: true }));
        }}
        className={styles.button}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
