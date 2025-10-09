import "../styles/Header.css";
import { Search, Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="header" role="banner">
      <h1>Healthcare.</h1>
      <div className="search-bar" role="search">
        <Search size={16} aria-hidden="true" />
        <input 
          type="text" 
          placeholder="Search..." 
          readOnly 
          aria-label="Search healthcare dashboard"
          aria-describedby="search-help"
        />
        <span id="search-help" className="sr-only">Search functionality coming soon</span>
      </div>
      <button 
        className="btn-icon"
        aria-label="View notifications"
        title="Notifications"
      >
        <Bell size={20} aria-hidden="true" />
      </button>
      <div className="profile" role="presentation">
        <img src="https://i.pravatar.cc/30" alt="Dr. Smith profile picture" /> 
        <span>Dr. Smith</span>
      </div>
      <button 
        className="add-btn"
        aria-label="Add new item"
        title="Add new item"
      >
        <Plus size={16} aria-hidden="true" />
      </button>
    </header>
  );
}
