import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Ash 🗿
      </Link>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/registration-form">Register</Link>
      </ul>
    </nav>
  )
}