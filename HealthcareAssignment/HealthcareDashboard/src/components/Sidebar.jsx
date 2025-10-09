import "../styles/Sidebar.css";
import navLinks from "../data/navigation";
import { Home, Calendar, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  const icons = {
    Dashboard: <Home />,
    Calendar: <Calendar />,
    Statistics: <BarChart2 />,
    Setting: <Settings />,
  };

  return (
    <aside className="sidebar" role="navigation" aria-label="Main navigation">
      <h3>General</h3>
      <nav>
        <ul role="menubar">
          {navLinks.map((link) => (
            <li key={link} role="none">
              <button 
                className="nav-item-btn"
                role="menuitem"
                aria-label={`Navigate to ${link}`}
                tabIndex="0"
              >
                <span aria-hidden="true">{icons[link] || "•"}</span>
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
