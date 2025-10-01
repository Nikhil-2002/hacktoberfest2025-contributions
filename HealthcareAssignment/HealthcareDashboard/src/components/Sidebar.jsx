import "../styles/Sidebar.css";
import { Home, Calendar, BarChart2, Settings, History, Clock, MessageCircle, LifeBuoy } from "lucide-react";

export default function Sidebar() {
  const icons = {
    Dashboard: <Home />,
    Calendar: <Calendar />,
    History: <History />,
    Statistics: <BarChart2 />,
    Appointments: <Clock />,
    Chat: <MessageCircle />,
    Support: <LifeBuoy />,
    Setting: <Settings />,
  };
  // Define the groups explicitly to control order and grouping
  const generalLinks = ["Dashboard", "History", "Calendar", "Appointments", "Statistics"];
  const toolLinks = ["Chat", "Support"];
  const settingLink = "Setting";

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h3 className="site-name">
          <span className="health">Health</span>
          <span className="care">care.</span>
        </h3>

        <div className="nav-group">
          <h4 className="nav-group-title">General</h4>
          <ul>
            {generalLinks.map((link) => {
              const href = `#${String(link).toLowerCase()}`;
              return (
                <li key={link}>
                  <a className="sidebar-link" href={href}>
                    <span className="sidebar-icon">{icons[link] || "•"}</span>
                    <span className="sidebar-text">{link}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-group">
          <h4 className="nav-group-title">Tools</h4>
          <ul>
            {toolLinks.map((link) => {
              const href = `#${String(link).toLowerCase()}`;
              return (
                <li key={link}>
                  <a className="sidebar-link" href={href}>
                    <span className="sidebar-icon">{icons[link] || "•"}</span>
                    <span className="sidebar-text">{link}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <ul>
          <li>
            <a className="sidebar-link sidebar-setting" href={`#${String(settingLink).toLowerCase()}`}>
              <span className="sidebar-icon">{icons[settingLink] || "•"}</span>
              <span className="sidebar-text">{settingLink}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
