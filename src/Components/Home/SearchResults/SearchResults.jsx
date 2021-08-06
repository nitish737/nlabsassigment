import React, { useEffect, useState } from "react";
import "./searchresults.scss";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const url =
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";
    const getting = await fetch(url);
    const result = await getting.json();
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="search-results">
        <div className="search-results__heading">
          <div className="search-results__heading__left">
            <span>The terms you are tracking</span>
          </div>
          <div className="search-results__heading__right">
            <span>The data will refresh every 5 min</span>
          </div>
        </div>
        <div className="search-results__table">
          <div className="search-results__table__heading">
            <div>Keyword</div>
            <div></div>
            <div>Goal</div>
            <div>Matches</div>
            <div>Search Status</div>
            <div>Delete Keyword</div>
          </div>
          {data.map((obj, index) => {
            return (
              <>
                <div className="search-results__table__data">
                  <div className="data">{obj.keyword}</div>
                  <div className="data"><i className="fas fa-search"></i></div>
                  <div className="data">{obj.goal}</div>
                  <div className="data">{obj.matches}</div>
                  <div className="data">{obj.search_status}</div>
                  <div className="data"><span></span></div>
                </div>
              </>
            );
          })}

        </div>
        <div className="search-results__button">
            <button>
                VIEW RESULTS
            </button>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
