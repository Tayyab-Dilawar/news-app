import { useEffect, useState } from "react";
import moment from "moment";

import Footer from "../footer/Footer";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import FilterResult from "../filterResult/FilterResult";
import CustomizeNewsFeed from "../customizeNewsFeed/CustomizeNewsFeed";
import CustomizeCheckBox from "../customizeCheckBox/CustomizeCheckBox";

// const newsApiKey = "9c5aec322515405b86b8264973df81ed";
const newsApiKey = "6046867fa79f4b379c70524289a2823b";

const Main = () => {
  const [search, setSearch] = useState("All");
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  const [filterDate, setFilterDate] = useState("");
  const [filterSource, setFilterSource] = useState("");
  const [sourceList, setSourceList] = useState([]);
  const [customizedSource, setCustomizedSource] = useState("");
  const [customizedCategory, setCustomizedCategory] = useState("");
  const [customizedCheckBox, setCustomizedCheckBox] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const totalResultOnPage = 20;

  const getNews = () => {
    const url = customizedCheckBox
      ? customizedSource
        ? `https://newsapi.org/v2/everything?q=${customizedCategory}&domains=${customizedSource}&pageSize=${totalResultOnPage}&page=${currentPage}&sortBy=popularity&apiKey=${newsApiKey}`
        : `https://newsapi.org/v2/everything?q=${customizedCategory}&pageSize=${totalResultOnPage}&page=${currentPage}&sortBy=popularity&apiKey=${newsApiKey}`
      : `https://newsapi.org/v2/everything?q=${search}&pageSize=${totalResultOnPage}&page=${currentPage}&sortBy=popularity&apiKey=${newsApiKey}`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const newSourceList = [];
          if (data.status !== "error") {
            for (let art of data.articles) {
              if (
                !newSourceList.includes(art.source.name) &&
                art.source.name !== "[Removed]"
              ) {
                newSourceList.push(art.source.name);
              }
            }
            setSourceList(newSourceList);
            setNews(data.articles);
            setFilteredNews(data.articles);
            setTotalPages(Math.ceil(data.totalResults / totalResultOnPage));
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setFilterDate("");
    setFilterSource("");
    getNews();
  }, [search, customizedCategory, customizedSource, currentPage]);

  useEffect(() => {
    let filtered = news;

    if (filterDate) {
      filtered = filtered.filter((article) =>
        moment(article.publishedAt).isSame(filterDate, "day")
      );
    }

    if (filterSource) {
      filtered = filtered.filter(
        (article) => article.source.name === filterSource
      );
    }

    setFilteredNews(filtered);
  }, [filterDate, news, filterSource]);

  return (
    <div className="relative">
      <Navbar setSearch={setSearch} customizedCheckBox={customizedCheckBox} />
      <CustomizeCheckBox
        customizedCheckBox={customizedCheckBox}
        setCustomizedCheckBox={setCustomizedCheckBox}
      />
      {customizedCheckBox && (
        <CustomizeNewsFeed
          setCustomizedSource={setCustomizedSource}
          setCustomizedCategory={setCustomizedCategory}
        />
      )}
      <FilterResult
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        sourceList={sourceList}
        filterSource={filterSource}
        setFilterSource={setFilterSource}
      />
      <Home
        news={filteredNews}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <Footer />
    </div>
  );
};

export default Main;
