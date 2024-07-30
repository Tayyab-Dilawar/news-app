const FilterResult = ({
  filterDate,
  setFilterDate,
  sourceList,
  filterSource,
  setFilterSource,
}) => {
  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleSourceChange = (e) => {
    setFilterSource(e.target.value);
  };
  return (
    <div className="bg-slate-100">
      <div className="px-1 sm:px-2 md:w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] m-auto flex flex-col sm:flex-row gap-5 p-3 sm:p-5">
        <input
          type="date"
          value={filterDate}
          onChange={handleDateChange}
          className="flex-1 p-3"
        />
        <select
          value={filterSource}
          onChange={handleSourceChange}
          className="flex-1 p-3"
        >
          <option value="" disabled>
            Select Source
          </option>
          <option value="">All</option>
          {sourceList?.map((list) => (
            <option value={list} key={list}>
              {list}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterResult;
