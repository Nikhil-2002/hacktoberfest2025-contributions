import { useState } from "react";
import {
  Home,
  Calendar,
  BarChart2,
  Settings,
  Activity,
  HeartPulse,
  Stethoscope,
  LogOut,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const navLinks = [
    { name: "Dashboard", icon: <Home /> },
    { name: "Appointments", icon: <Calendar /> },
    { name: "Health Stats", icon: <BarChart2 /> },
    { name: "Patients", icon: <Stethoscope /> },
    { name: "Heart Monitor", icon: <HeartPulse /> },
    { name: "Activity", icon: <Activity /> },
    { name: "Settings", icon: <Settings /> },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gradient-to-b from-blue-50 to-blue-100 border-r border-blue-200 transition-all duration-300 flex flex-col shadow-md`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <h2
          className={`text-2xl font-bold text-blue-700 transition-all duration-300 ${
            !isOpen && "hidden"
          }`}
        >
          HealthCare+
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-700 hover:bg-blue-200 p-2 rounded-lg"
        >
          <Menu />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 mt-4">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href="#"
                className="flex items-center gap-4 p-3 rounded-xl text-blue-700 font-medium hover:bg-blue-200 hover:text-blue-900 transition-all duration-200"
              >
                <span className="text-lg">{link.icon}</span>
                <span className={`${!isOpen && "hidden"} transition-all`}>
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-blue-200">
        <button className="flex items-center gap-4 text-blue-600 hover:text-red-500 hover:bg-red-50 p-3 rounded-xl w-full transition-all">
          <LogOut />
          <span className={`${!isOpen && "hidden"} transition-all`}>
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
