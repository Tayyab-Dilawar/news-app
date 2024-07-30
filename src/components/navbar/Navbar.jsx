import React, { useState } from "react";

import searchImg from "../../images/search.png";

const Navbar = ({ setSearch, customizedCheckBox }) => {
  const [navSearch, setNavSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(navSearch);
    setNavSearch("");
  };

  return (
    <div className="h-20 px-1 sm:px-2 md:w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] m-auto relative">
      <div className="flex items-center justify-between gap-8 h-full">
        <div className="w-full flex items-center gap-2 sm:gap-12">
          <div className="text-sm font-semibold sm:text-2xl tracking-wide flex items-center gap-3">
            WORLD NEWS
          </div>
          {!customizedCheckBox && (
            <form
              className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md w-[190px] sm:w-[400px]"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none"
              />
              <button className="cursor-pointer" type="submit">
                <img src={searchImg} alt="" width={16} height={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
