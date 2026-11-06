import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/add-doctor">Add Doctor</Link>
        </div>
    )
}

export default Navbar
