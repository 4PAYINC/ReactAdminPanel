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
import { useState, useEffect } from "react";
import { AuthProvider } from "./store/context/auth";

function App() {
  const [hide, setHide] = useState(false);
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
        <AuthProvider>
          <Provider store={store}>
            <Sidebar hide={hide} />
            <div className="dashboardContainer">
              <Navbar hide={hide} />
              <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users">
                  <Route index element={<List />} />
                  <Route path=":userID" element={<Single />} />
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
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
