import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userID" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="/products">
          <Route index element={<List />} />
          <Route path=":userID" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
