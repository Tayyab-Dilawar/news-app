// `https://newsapi.org/v2/everything?q=politics&pageSize=20&page=2&sortBy=popularity&apiKey=6046867fa79f4b379c70524289a2823b`
import React from "react";
import moment from "moment";

const Home = ({ news, currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="bg-slate-100">
      <div className="px-1 sm:px-2 md:w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] m-auto p-3 sm:p-5">
        {news?.length === 0 ? (
          <div className="w-full h-[calc(100vh-400px)] flex items-center justify-center text-3xl font-bold">
            No Results
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-y-12 gap-x-10">
              {news.map((data, index) => {
                const date = moment(data.publishedAt);
                const formattedDate = date.format("D-MM-YYYY");
                if (data.title !== "[Removed]") {
                  return (
                    <div
                      className="bg-white flex flex-col shadow-lg sm:w-[45%] lg:w-[30%] xl:w-[22%] relative"
                      key={`${data.title}${index}`}
                    >
                      <div className=" h-full">
                        <img
                          className="w-full object-cover h-[180px]"
                          src={data.urlToImage}
                          alt={data.author}
                        />
                        <div className="p-4">
                          <div className="font-bold text-xl mb-2">
                            {data.title}
                          </div>
                          <p className="text-gray-700 text-base">
                            {data.content}
                          </p>
                          <button className="mt-5">
                            <a
                              className="p-3 bg-slate-100 mt-3 rounded-md"
                              href={data.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              News Source
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className=" w-full p-4 flex justify-between bg-slate-100">
                        <p className="font-semibold text-sm">{data.author}</p>
                        <p className="text-sm">{formattedDate}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <React.Fragment
                      key={`${data.title}${index}`}
                    ></React.Fragment>
                  );
                }
              })}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                className="px-5 py-3 bg-slate-300 shadow-lg disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previos
              </button>
              <div>
                {currentPage} of {totalPages}
              </div>
              <button
                className="px-5 py-3 bg-slate-300 shadow-lg disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
