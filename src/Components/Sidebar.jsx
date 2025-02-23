import { FaUserMd, FaCalendarAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation

export default function Sidebar({ setShowForm, setShowProfile }) {

  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/auth"); 
    window.location.reload(); // Refresh page after logout
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-6 flex flex-col z-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">MediMate</h2>
      <nav className="flex flex-col space-y-4 flex-grow">
        <a href="#" className="flex items-center space-x-2 p-3 rounded bg-blue-700">
          <FaUserMd /> <span>Dashboard</span>
        </a>
        <a
          href="#"
          onClick={() => {
            setShowForm(true);
            setShowProfile(false);
          }}
          className="flex items-center space-x-2 p-3 rounded hover:bg-blue-700"
        >
          <FaCalendarAlt /> <span>Add To Inventory</span>
        </a>
        <a
          href="#"
          onClick={() => {
            setShowProfile(true);
            setShowForm(false);
          }}
          className="flex items-center space-x-2 p-3 rounded hover:bg-blue-700"
        >
          <FaUser /> <span>Profile</span>
        </a>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 flex items-center space-x-2 p-3 rounded bg-red-500 hover:bg-red-600 transition-colors"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}
