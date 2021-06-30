import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import { Container } from "semantic-ui-react";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
      <Footer className="footer"/>  
    </div>
  );
}

export default App;
