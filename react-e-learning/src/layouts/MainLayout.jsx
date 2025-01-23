import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is open by default

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Fixed at the left) */}
      <div className="fixed left-0 top-0">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content (Offset by the sidebar width if sidebar is open) */}
      <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
}