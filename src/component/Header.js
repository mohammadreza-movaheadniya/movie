import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import { navigation } from "../constant/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    } else {
      navigate(`/`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full px-4 h-16 bg-black bg-opacity-75 z-50 flex items-center">
      {/* header left */}
      <div className="container mx-auto  h-full gap-x-2.5 flex items-center">
        <Link to={"/"}>
          <img src={Logo} alt="logo" width="120" className="mx-3" />
        </Link>
        <nav className=" hidden lg:block">
          {navigation.map((item, index) => (
            <NavLink
              key={item.label + "header" + index}
              to={item.href}
              className={({ isActive }) =>
                `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* header right */}
      <div className="ml-auto flex items-center gap-x-5">
        {/* SerachBar Sect */}
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none px-4 py-1 border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white hidden lg:block">
              <IoSearchOutline />
            </button>
          </form>
        </div>

        {/* UserIcon Sect */}
        <div className="rounded-full overflow-hidden w-8 h-8 cursor-pointer active:scale-50 transition-all">
          <img src={User} alt="user logo" className=" w-full h-full gap-2 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
