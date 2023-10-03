import "./App.css";
import Header from "./components/Header";
import InfoTableContainer from "./components/InfoTableContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Property from "./components/Property";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {/* <InfoTableContainer /> */}
        <Routes>
          <Route path="/" exact index element={<InfoTableContainer />} />
          <Route path="/property/:id" exact index element={<Property />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
