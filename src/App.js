import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewVideo from "./pages/NewVideo/NewVideo";
import EstilosGlobales from "./components/EstilosGlobales/EstilosGlobales";

const GeneralBackground = styled.div`
  background: #262626;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <GeneralBackground>
        <EstilosGlobales />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NewVideo />} />
        </Routes>
      </GeneralBackground>
    </Router>
  );
};

export default App;
