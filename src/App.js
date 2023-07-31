import {Header} from "@/components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from "@/pages/Main";
import {Price} from "@/pages/Price";
import {About} from "@/pages/About";
import {Contacts} from "@/pages/Contacts";
import {Service} from "@/pages/Service";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
