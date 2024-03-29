import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

class App extends Component {
  render = () => (
    // Rules
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={""} element={<HomeScreen />} />
          <Route path={"/login"} element={<LoginScreen />} />
          <Route path={"/sign-up"} element={<SignUpScreen />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
