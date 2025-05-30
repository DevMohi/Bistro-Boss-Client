import {
  FaHome,
  FaCalendar,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaStar,
  FaCalendarCheck,
  FaUtensils,
  FaStore,
  FaPhone,
  FaList,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  // Toggle this based on user role
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  //Navigation for users
  const userNav = [
    { to: "userHome", icon: <FaHome />, label: "User Home" },
    { to: "reservation", icon: <FaCalendar />, label: "Reservation" },
    {
      to: "paymentHistory",
      icon: <FaMoneyCheckAlt />,
      label: "Payment History",
    },
    { to: "cart", icon: <FaShoppingCart />, label: `My Cart (${cart.length})` },
    { to: "review", icon: <FaStar />, label: "Add Review" },
    { to: "bookings", icon: <FaCalendarCheck />, label: "My Bookings" },
  ];

  // Navigation for admins
  const adminNav = [
    { to: "adminHome", icon: <FaHome />, label: "Admin Home" },
    { to: "addItems", icon: <FaUtensils />, label: "Add Items" },
    { to: "manageItems", icon: <FaList />, label: "Manage Items" },
    {
      to: "manageBookings",
      icon: <FaCalendarCheck />,
      label: "Manage Bookings",
    },
    { to: "users", icon: <FaUsers />, label: "All Users" },
  ];

  // Common bottom links
  const linksBottom = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/menu", icon: <FaUtensils />, label: "Menu" },
    { to: "/shop", icon: <FaStore />, label: "Shop" },
    { to: "/contact", icon: <FaPhone />, label: "Contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded transition ` +
    (isActive ? "bg-[#B38E3A] text-white" : "text-gray-800 hover:bg-[#C9A45F]");

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#D1A054] text-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-6 text-center border-b border-[#B38E3A]">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <p className="text-sm">RESTAURANT</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {/* Admin or User links */}
          {(isAdmin ? adminNav : userNav).map(({ to, icon, label }) => (
            <NavLink key={label} to={to} className={linkClasses}>
              <span className="mr-3 text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}

          {/* Divider */}
          <hr className="my-4 border-[#B38E3A]" />

          {/* Common bottom links */}
          {linksBottom.map(({ to, icon, label }) => (
            <NavLink key={label} to={to} className={linkClasses}>
              <span className="mr-3 text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6 overflow-auto text-black">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
