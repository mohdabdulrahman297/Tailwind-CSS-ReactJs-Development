import React from "react";
import { FaUserGroup, FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineAddBusiness, MdContactSupport } from "react-icons/md";

export default function Help() {
  return (
    <div>
      <p className="text-center mt-20 font-normal text-gray-700 text-3xl">
        More ways to get help
      </p>
      <div className="flex justify-start">
        <div className="lg:ml-20 sm:ml-5 mt-10 w-1/4 lg:w-1/6 text-center">
          <FaUserGroup className="h-8 w-8 ml-20 lg:ml-28" />
          <span>Community Forum</span>
          <p>Find answers or join the conversation</p>
        </div>
        <div className="lg:ml-20 sm:ml-5 mt-10 w-1/4 lg:w-1/6 text-center">
          <FaHandshakeSimple className="h-8 w-8 ml-20 lg:ml-28" />
          <span>Resolution Center</span>
          <p>Resolve transaction or account issues</p>
        </div>
        <div className="lg:ml-20 sm:ml-5 mt-10 w-1/4 lg:w-1/6 text-center">
          <MdOutlineAddBusiness className="h-8 w-8 ml-20 lg:ml-28" />
          <span>Business Resources</span>
          <p>Get tips on starting or growing your business</p>
        </div>
        <div className="lg:ml-20 sm:ml-5 mt-10 w-1/4 lg:w-1/6 text-center">
          <MdContactSupport className="h-8 w-8 ml-20 lg:ml-28" />
          <span>Contact us</span>
          <p>Contact Customer Service</p>
        </div>
      </div>
    </div>
  );
}
