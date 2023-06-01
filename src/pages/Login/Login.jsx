import React, { useEffect, useState } from "react";
import { getUsers } from "../../util/http";
import handleChange from "../../hooks/handleChange";
import { login } from "../../util/http";
import { useAuth } from "../../store/context/auth";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [userName, setUsername, usernameReset] = handleChange("");
  const [password, setPassword, passwordReset] = handleChange("");
  const [userData, setUserData] = useState();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/dashboard";

  async function handleFormSubmit(e) {
    e.preventDefault();
    let response = await login(userName, password);
    // setUserData(await login(userName, password));
    setUserData(response);
    auth.login(response);
  }

  useEffect(() => {
    if (userData != undefined) {
      if (userData.callStatus == 0) {
        console.log("bad login");
        // auth.login(userData);
        console.log(auth.user);
        // navigate("/dashboard");
      } else {
        console.log("Logged In!!!");
        console.log(auth.user);

        // auth.login(userData);
        navigate(redirectPath, { replace: true });
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

      {auth.user && auth.user.callStatus == 0 ? (
        <div>Please enter a valid login</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Login;
