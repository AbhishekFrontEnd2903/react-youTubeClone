import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
// import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { SUGGEST_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  console.log(searchQuery);
  useEffect(() => {
    console.log("useeffect", searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    //make an api call after key press
    // but if difference btwn 2 key pess is less than 200 ms
    // decline api call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    // const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const data = await fetch(`${SUGGEST_API}?q=${searchQuery}`);

    const json = await data.json();
    console.log("json", json);
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-10 mx-4"
            src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
            alt="youTubeLogo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 px-5 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
          {showSuggestions && (
            <div className="fixed py-2 px-5 bg-white shadow-lg rounded-lg w-[37rem] border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="shadow-sm hover:bg-gray-100">
                    🔍{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
