import React from "react";
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
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const linksTop = [
    { to: "userHome", icon: <FaHome />, label: "User Home" },
    { to: "reservation", icon: <FaCalendar />, label: "Reservation" },
    {
      to: "paymentHistory",
      icon: <FaMoneyCheckAlt />,
      label: "Payment History",
    },
    { to: "cart", icon: <FaShoppingCart />, label: "My Cart" },
    { to: "review", icon: <FaStar />, label: "Add Review" },
    { to: "bookings", icon: <FaCalendarCheck />, label: "My Bookings" },
  ];

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
        {/* Logo Section */}
        <div className="p-6 text-center border-b border-[#B38E3A]">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <p className="text-sm">RESTAURANT</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {linksTop.map(({ to, icon, label }) => (
            <NavLink key={label} to={to} className={linkClasses}>
              <span className="mr-3 text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}

          {/* Divider */}
          <hr className="my-4 border-[#B38E3A]" />

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
