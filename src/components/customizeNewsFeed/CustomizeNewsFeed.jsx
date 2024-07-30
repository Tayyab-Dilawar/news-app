import React, { useState } from "react";

const source = [
  { domain: "theverge.com", value: "THE VERGE" },
  { domain: "wired.com", value: "WIRED" },
  { domain: "techcrunch.com", value: "TECH CRUNCH" },
  { domain: "thenextweb.com", value: "THE NEXT WEB" },
  { domain: "bbc.com", value: "BBC" },
  { domain: "bbc.co.uk", value: "BBC UK" },
  { domain: "engadget.com", value: "ENGADGET" },
  { domain: "yahoo.com", value: "YAHOO" },
];

const category = [
  { cat: "all", value: "All" },
  { cat: "technology", value: "Technology" },
  { cat: "health", value: "Health" },
  { cat: "business", value: "Business" },
  { cat: "politics", value: "Politics" },
  { cat: "apple", value: "Apple" },
  { cat: "sport", value: "Sport" },
  { cat: "travel", value: "Travel" },
];

const CustomizeNewsFeed = ({ setCustomizedSource, setCustomizedCategory }) => {
  const [selectedSources, setSelectedSources] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");

  const handleSourcesChange = (e) => {
    setSelectedSources(e.target.value);
  };

  const handleCategoriesChange = (e) => {
    setSelectedCategories(e.target.value);
  };

  const handleSearch = () => {
    setCustomizedSource(selectedSources);
    setCustomizedCategory(selectedCategories);
  };

  return (
    <div className="bg-slate-100">
      <div className="px-1 sm:px-2 md:w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] m-auto flex flex-col sm:flex-row gap-5 p-3 sm:p-5">
        <select
          onChange={handleSourcesChange}
          value={selectedSources}
          className="flex-1 p-3"
        >
          <option value="" disabled>
            Select Preferred Source
          </option>
          {source.map((s) => (
            <option key={s.domain} value={s.domain}>
              {s.value}
            </option>
          ))}
        </select>
        <select
          onChange={handleCategoriesChange}
          value={selectedCategories}
          className="flex-1 p-3"
        >
          <option value="" disabled>
            Select Preferred Category
          </option>
          {category.map((c) => (
            <option key={c.cat} value={c.cat}>
              {c.value}
            </option>
          ))}
        </select>
        <button className="bg-white py-2 px-5" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default CustomizeNewsFeed;
