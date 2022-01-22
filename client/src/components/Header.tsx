/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import circle from "../assets/circle.svg";
import square from "../assets/square.svg";
import logo from "../assets/logo.svg";
import { LogoutIcon } from "@heroicons/react/solid";
import { useActions } from "../lib/hooks/useActions";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    label: "Home",
    url: "/",
    active: true,
  },
  {
    label: "Contact",
    url: "/contact",
    active: false,
  },
];
// The header component is responsible for diplaying the navbar
// the header component will be visible only when authenticated
const Header = () => {
  const { signOut } = useActions();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const handleClick = () => {
    signOut();
    history.push("/");
  };
  return (
    <Disclosure as="nav" className="bg-header shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className=" flex bg-theme items-center">
              <img
                className="block   mt-3 h-12 w-auto"
                src={square}
                alt="Workflow"
              />
              <img
                className="block text-theme -ml-2  mt-3 h-12 w-auto"
                src={logo}
                alt="Workflow"
              />
              <img
                className="block mt-3 -ml-3  h-14 w-auto"
                src={circle}
                alt="Workflow"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {MenuItems.map((menu, i) => (
                <Link
                  key={i}
                  to={menu.url}
                  className={
                    location.pathname === menu.url
                      ? "border-b-2 border-theme border-lighttheme text-white inline-flex items-center px-1 pt-1  text-sm font-medium"
                      : "border-lighttheme text-white inline-flex items-center px-1 pt-1  text-sm font-medium"
                  }
                >
                  {menu.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="relative bg-theme inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-theme shadow-sm hover:bg-lighttheme focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleClick}
              >
                <LogoutIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
export default Header;
