import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Card from "../component/Card";

const SearchPage = () => {
  let [searchData, setSearchData] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  let location = useLocation();
  let navigaite = useNavigate();
  const query = location?.search?.slice(3)?.split("%20")?.join(" ");

  let fetchSearchData = async () => {
    let response = await axios.get(`/search/multi`, {
      params: {
        query,
        page: pageNo,
      },
    });
    setSearchData((prev) => [...prev, ...response.data.results]);
  };

  let handelScroll = () => {
    if (
      window.innerHeight + window.scrollY >
      document.body.offsetHeight - 400
    ) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPageNo(1);
    setSearchData([]);
    fetchSearchData();
  }, [location.search]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  useEffect(() => {
    if (query) {
      fetchSearchData();
    }
  }, [pageNo]);

  return (
    <>
      <div className="pt-16 container mx-auto px-6">
        <div className="mt-6 lg:hidden ">
          <input
            type="text"
            className=" text-neutral-900 rounded-full border-none outline-none bg-white w-full p-2 "
            placeholder="Search here..."
            onChange={(e) => navigaite(`/search?q=${e.target.value}`)}
          />
        </div>
        <h2 className="lg:text-xl text-lg font-semibold my-6"> Search Page</h2>
        <div className=" grid grid-cols-[repeat(auto-fit,250px)] gap-6 justify-center lg:justify-start mx-auto my-6 ">
          {searchData.map((item, index) => (
            <Card data={item} key={index + `searchPAge`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
