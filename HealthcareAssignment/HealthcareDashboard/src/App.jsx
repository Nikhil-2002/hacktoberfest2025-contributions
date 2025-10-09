import "./styles/App.css";
import "./styles/Responsive.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content" role="main" aria-label="Healthcare dashboard main content">
        <Header />
        <DashboardMainContent />
      </main>
    </div>
  );
}

export default App;
