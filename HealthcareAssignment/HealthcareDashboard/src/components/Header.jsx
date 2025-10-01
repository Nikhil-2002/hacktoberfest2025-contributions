import "../styles/Header.css";
import { Search, Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <div className="search-bar">
        <Search size={16} />
        <input type="text" placeholder="Search..." readOnly />
      </div>
      <Bell />
      <div className="profile">
        <img src="https://i.pravatar.cc/30" alt="User" /> <span>Dr. Smith</span>
      </div>
      <button className="add-btn">
        <Plus size={16} />
      </button>
    </header>
  );
}
