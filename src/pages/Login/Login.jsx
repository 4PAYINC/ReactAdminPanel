import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { getUsers } from "../../util/http";
import handleChange from "../../hooks/handleChange";
import { login } from "../../util/http";

function Login() {
  const [userName, setUsername, usernameReset] = handleChange("");
  const [password, setPassword, passwordReset] = handleChange("");
  const [userData, setUserData] = useState();

  async function handleFormSubmit(e) {
    e.preventDefault();
    let response = await login(userName, password);
    // setUserData(await login(userName, password));
    setUserData(response);
  }

  useEffect(() => {
    if (userData != undefined) {
      if (userData.callStatus == 0) {
        console.log("bad login");
        console.log(userData);
      } else {
        console.log("Logged In!!!");
        console.log(userData);
      }
    }
  }, [userData]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">
          User Name {userData == undefined ? "stuff here" : "got data"}
        </label>
        <input name="username" value={userName} onChange={setUsername}></input>
        <label htmlFor="username">Password</label>
        <input name="username" value={password} onChange={setPassword}></input>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Login;
