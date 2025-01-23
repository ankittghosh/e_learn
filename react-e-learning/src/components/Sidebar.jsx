import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, BookOpen, User, LogOut, Menu } from "lucide-react";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  // Logout function
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // Example: Clear tokens, redirect to login page
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <Button
        variant="default"
        className="fixed top-4 left-4 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Sidebar (Collapsible on both mobile and desktop) */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-4" hideClose>
          {/* Pass handleLogout as a prop to SidebarContent */}
          <SidebarContent handleLogout={handleLogout} />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function SidebarContent({ handleLogout }) {
  return (
    <div className="flex flex-col h-full">
      {/* Heading (Use theme color) */}
      <h1 className="text-2xl font-bold mb-8 text-primary">E-Learner</h1>

      {/* Navigation Links (Add space between items) */}
      <nav className="flex-1 space-y-1">
        <NavLink
          to="/app/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-foreground rounded-md" : ""
          }
        >
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-muted"
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </NavLink>

        <NavLink
          to="/app/courses"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-foreground rounded-md" : ""
          }
        >
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-muted"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Courses
          </Button>
        </NavLink>

        <NavLink
          to="/app/profile"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-foreground rounded-md" : ""
          }
        >
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-muted"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </NavLink>
      </nav>

      {/* Logout Button (Positioned at the bottom) */}
      <Button
        variant="ghost"
        className="w-full justify-start mt-auto hover:bg-muted"
        onClick={handleLogout}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}
