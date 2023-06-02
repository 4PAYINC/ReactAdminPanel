import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AuthProvider } from "./store/context/auth";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";
import { useIdleTimer } from "react-idle-timer";
import { useAuth } from "./store/context/auth";

function App() {
  const [hide, setHide] = useState(false);
  const auth = useAuth();

  useIdleTimer({
    timeout: 1000 * 60 * 20,
    onIdle: () => {
      auth.logout();
      // console.log("idle");
    },
  });

  let path = useLocation();
  useEffect(() => {
    if (path.pathname === "/" || path.pathname === "/signup") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [path.pathname]);

  return (
    <div className="App">
      <div className="home">
        <Provider store={store}>
          <Sidebar hide={hide} />
          <div className="dashboardContainer">
            <Navbar hide={hide} />
            <Routes>
              <Route path="/" element={<Login />} />

              <Route
                path="/dashboard"
                element={
                  <RequiredAuth>
                    <Dashboard />
                  </RequiredAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/users">
                <Route
                  index
                  element={
                    <RequiredAuth>
                      <List />
                    </RequiredAuth>
                  }
                />
                <Route
                  path=":userID"
                  element={
                    <RequiredAuth>
                      <Single />
                    </RequiredAuth>
                  }
                />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="/phones">
                <Route index element={<List />} />
                <Route path=":phoneID" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Routes>
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
