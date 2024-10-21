import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { MdSearch } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import SideBar from "./SideBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function showSideMenu() {
    setToggle(true);
  }
  

  const links = [
    {
      icon: <RiShoppingBagLine />,
      name: "Swiggy Corporate",
    },
    {
      icon: <MdSearch />,
      name: "Search",
    },
    {
      icon: <LuBadgePercent />,
      name: "Offers",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <CiUser />,
      name: "Sign In",
    },
    {
      icon: <BsCartCheck />,
      name: "Cart",
    },
  ];
  return (
    <>
      <SideBar toggle={toggle} setToggle={ setToggle } />

      <header className="p-[15px] shadow-xl ">
        <div className="max-w-[1200px] mx-auto   flex items-center gap-7">
          <div className="w-[50px]">
            <img src="/swiggyLogo.png" alt="logoImg" />
          </div>
          <div className="text-[#686b78] cursor-pointer "onClick={showSideMenu}>
            <span className="font-bold  border-b-[3px] border-[#fc8019]  text-[#fc8019]">
              Dadar
            </span>{" "}
            <span className="hover:text-[#fc8019] hover:font-bold">Mumbai, Maharashtra, India{" "}</span>
            <RxCaretDown
              
              className="inline text-[0.9rem] text-[#fc8019]"
            />
          </div>
          <nav className="list-none   ml-auto font-semibold text-[18px]">
            <ul className="flex gap-4">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center cursor-pointer gap-1 hover:text-[#fc8019]"
                >
                  {link.icon} {link.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
