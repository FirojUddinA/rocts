
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Home} from "./pages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <Navbar/>
       <Home />
       <Footer />
    </>
  );
}

export default App;
