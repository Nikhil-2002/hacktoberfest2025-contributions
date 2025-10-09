import { Search, Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white border-b border-blue-100 px-6 py-3 shadow-sm">
      <h1 className="text-2xl font-semibold text-blue-700">Healthcare+</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
          <Search className="text-blue-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search patients..."
            className="bg-transparent focus:outline-none text-sm text-blue-800"
          />
        </div>

        <Bell className="text-blue-600 cursor-pointer hover:text-blue-800" />

        <div className="flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <span className="font-medium text-blue-700">Dr. Smith</span>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-md">
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
}
