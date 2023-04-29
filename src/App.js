import UpperMenu from "./Components/UpperMenu/UpperMenu";
import TypingBox from "./Components/TypingBox/TypingBox";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="Canvas">
      <div className="Header">Header</div>
      <TypingBox />
      {/* <UpperMenu /> */}
      <Footer/>
    </div>
  );
}

export default App;
