import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { BsPaypal } from "react-icons/bs";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 px-6 py-6">
      <Link to="/" className="self-center">
        <span>
          <BsPaypal className="w-8 h-8 lg:ml-6" style={{ color: "#0c35b0" }} />
        </span>
      </Link>
      <div className="hidden sm:hidden md:flex">
        <span className="text-gray-600 ml-6 sm:ml-10 cursor-pointer hover:underline">
          Personal
        </span>
        <span className="text-gray-600 ml-6 sm:ml-10 cursor-pointer hover:underline">
          Developer
        </span>
        <span className="text-gray-600 ml-6 sm:ml-10 cursor-pointer hover:underline">
          Help
        </span>
        <span className="text-gray-600 ml-6 sm:ml-10 cursor-pointer hover:underline">
          Business
        </span>
      </div>

      <div className="ml-auto flex space-x-4">
        <Link to="/sign-in">
          <Button className="rounded-full px-3 border-blue-800 bg-white text-blue-800 hover:bg-blue-800 hover:text-white hidden sm:hidden md:flex">
            Log In
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button className="rounded-full px-3 bg-blue-800 text-white lg:mr-6">
            Sign Up
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:hidden">
        <Navbar.Link active={path === "/sign-in"} as={"div"}>
          <Link to="/sign-in">Log In</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/personal"} as={"div"}>
          <Link to="/personal">Personal</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/business"} as={"div"}>
          <Link to="/business">Business</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/developer"} as={"div"}>
          <Link to="/developer">Developer</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/help"} as={"div"}>
          <Link to="/help">Help</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
