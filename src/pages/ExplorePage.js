import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../component/Card";
const ExplorePage = () => {
  let [pageNo, setPageNo] = useState(1);
  let [data, setData] = useState([]);
  let params = useParams();
  let [loading, setLoading] = useState(false);

  let fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      let res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => [...prev, ...res.data.results]);
      setLoading();
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 400 &&
      !loading
    ) {
      setPageNo((preve) => preve + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
  }, [params.explore]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="py-16 mx-6">
        <h2 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {params.explore} show
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,250px)] gap-6 justify-center lg:justify-start mx-auto mt-5">
          {data.map((item, index) => (
            <Card
              data={item}
              index={index + 1}
              key={item.id + "exploreSEction"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
