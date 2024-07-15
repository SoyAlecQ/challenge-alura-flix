import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import NewVideo from "./pages/new-video";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NewVideo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
