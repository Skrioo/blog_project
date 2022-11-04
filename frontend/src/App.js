import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import BlogPage from "./views/blogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <AuthProvider>
            <Routes>
              <Route element={<Navbar />}></Route>

              {/* <PrivateRoute
                element={<ProtectedPage />}
                path="/protected"
                exact
              /> */}
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
              <Route element={<Home />} path="/" />
              <Route element={<BlogPage />} path="/blog" />
            </Routes>
          </AuthProvider>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
