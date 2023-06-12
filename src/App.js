import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import HomaePage from "./Pages/HomaePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserPage from "./Pages/UserPage"

function App() {
  return (
    <Router>
      <div className="Canvas">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <Routes>
          <Route path={"/"} element={<HomaePage />} />
          <Route path={"/user"} element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
