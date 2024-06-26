import React from "react";
import RadioFilter from "../components/RadioFilter";
import SearchBar from "../components/SearchBar";
import Info from "../components/Info";
import Help from "../components/Help";
import Survey from "../components/survey";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="mt-5">
      <span className="text-blue-500 font-semibold hover:underline ml-24 cursor-pointer">
        Help Center
      </span>
      <div className="text-center font-semibold text-3xl mt-5 sm:mt-0">
        How can we help ?
      </div>

      <SearchBar />

      <div className="flex">
        <RadioFilter />
        <Info />
      </div>
      <Help />
      <Survey />
      <Footer />
    </div>
  );
}
