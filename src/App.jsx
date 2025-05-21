import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

    const [hidd, sethidd] = useState(false);
   
  return (
    <>
      <div className="body-container">
        <Navbar />
        <Homepage  hidd={hidd} sethidd={sethidd}/>
        <Footer />

      
      </div>
    </>
  );
}

export default App;
