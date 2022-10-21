import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/homePage";
import "./style.css";
import { DashBoard } from "./views/dashboard/dashboard";

function App() {
  const auth = localStorage.getItem("auth");
  console.log("auth", auth);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/dashboard"
          element={auth === "true" ? <DashBoard /> : <HomePage />}
        />
        <Route
          path="*"
          element={auth === "true" ? <DashBoard /> : <HomePage />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
