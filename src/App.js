import "./App.css"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import TypingBox from "./Components/TypingBox/TypingBox"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="Canvas">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="Header">
        <Header />
      </div>
      <TypingBox />
      <Footer />
    </div>
  )
}

export default App
