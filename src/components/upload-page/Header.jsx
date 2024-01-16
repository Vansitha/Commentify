import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import GithubSvg from "./GithubSvg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  function determineLabel() {
    const currPath = location.pathname;
    let path = { to: "/usage", label: "Usage" };

    if (currPath !== "/") {
      path = { to: "/", label: "Home" };
    }

    return (
      <Link to={path.to} className='text-center text-sm px-5 text-gray-600'>
        {path.label}
      </Link>
    );
  }

  function handleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div className='md:flex md:justify-between pt-5 md:px-7'>
      <div className='flex justify-between'>
        <Logo />
        {showMenu ? (
          <XMarkIcon
            onClick={handleShowMenu}
            className='h-7 w-7 cursor-pointer md:hidden block'
          />
        ) : (
          <Bars3Icon
            onClick={handleShowMenu}
            className='h-7 w-7 cursor-pointer md:hidden block'
          />
        )}
      </div>
      <div
        className={`${
          showMenu ? "" : "hidden"
        } my-5 md:my-0 flex flex-col items-center md:flex md:flex-row md:justify-evenly md:items-center font-body top-[-400px] transition-all ease-in duration-500`}
      >
        {determineLabel()}
        <Link
          className='my-5 md:my-0 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs text-gray-600 transition-colors hover:bg-gray-100'
          to='https://github.com/Vansitha/code-documenter'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubSvg />
          <p>Star on GitHub</p>
        </Link>
      </div>
    </div>
  );
}
