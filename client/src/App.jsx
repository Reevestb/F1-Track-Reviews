import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./pages/Form";
import Message from "./pages/Messages";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}></Route>
        <Route path="/messages" element={<Message />}></Route>
      </Routes>
      <div id="footerBox">
        <Footer />
      </div>
    </>
  );
}
