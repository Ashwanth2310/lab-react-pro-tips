import Navbar from "./Header"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import RegistrationForm from "./pages/RegistrationForm"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
