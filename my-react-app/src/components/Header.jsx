
import { NavLink } from "react-router";
import classes from "./Header.module.css"; 

function Header() {
  return (
    <header style={{ 
      padding: "1rem", 
      backgroundColor: "#f4f4f4", 
      display: "flex", 
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ccc"
    }}>
      <h1>My App</h1>
      <nav style={{ display: "flex", gap: "15px" }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", textDecoration: "none", color: "black" })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/posts" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", textDecoration: "none", color: "black" })}
        >
          Posts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;