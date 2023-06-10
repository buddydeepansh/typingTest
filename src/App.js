import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TypingBox from "./Components/TypingBox/TypingBox";

function App() {
  return (
    <div className="Canvas">
      <div className="Header"><Header/></div>
      <TypingBox />
      <Footer/>
    </div>
  );
}

export default App;
