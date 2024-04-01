import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";

import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import NavBar from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskContext";
{/*align-items-center */}
const App = () => {
  return (
    <>
    <TaskContextProvider>
    <NavBar />
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
          </Routes>
        </div>
      </Container>
    </TaskContextProvider>
      
    </>
  );
};

export default App;
