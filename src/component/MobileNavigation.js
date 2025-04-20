import { NavLink } from "react-router";
import { mobileNavigation } from "../constant/navigation";

const MobileNavigation = () => {
  return (
    <section className=" fixed bottom-0  w-full lg:hidden bg-black opacity-80 z-50 py-2">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((item) => (
          <NavLink
            key={item.label + "mobilenavigation"}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col justify-center items-center px-3 ${
                isActive && "text-white"
              }`
            }
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="text-sm">{item.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;
