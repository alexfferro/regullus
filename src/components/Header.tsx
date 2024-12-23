import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center gap-12">
        <a href="#">
          <img src="#" alt="logo" />
        </a>
        <nav className="flex items-center justify-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-primary ease-in transition-colors tracking-widest ${
                isActive ? "text-primary" : "text-gray-400"
              }`
            }
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/moneylife"
            className={({ isActive }) =>
              `hover:text-primary ease-in transition-colors tracking-widest ${
                isActive ? "text-primary" : "text-gray-400"
              }`
            }
          >
            MONEYLIFE
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-primary ease-in transition-colors tracking-widest ${
                isActive ? "text-primary" : "text-gray-400"
              }`
            }
          >
            ABOUT US
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-6 w-[1px] bg-gradient-to-b from-sky-500 to-blue-700" />
        <Button className="rounded-full bg-gradient-to-r from-sky-400 to-blue-700 hover:brightness-90 transition-all ease-linear tracking-widest px-6">
          JOIN NOW
        </Button>
      </div>
    </div>
  );
}
