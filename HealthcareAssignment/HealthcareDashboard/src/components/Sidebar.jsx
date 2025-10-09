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
    <aside className="sidebar">
      <h3>General</h3>
      <ul>
        {navLinks.map((link) => (
          <li key={link}>
            <span>{icons[link] || "•"}</span>
            {link}
          </li>
        ))}
      </ul>
    </aside>
  );
}
