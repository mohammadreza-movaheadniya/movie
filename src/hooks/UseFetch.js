import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (endpoint) => {
  let [data, setData] = useState([]);

  let fetchData = async () => {
    try {
      let res = await axios.get(endpoint);
      setData(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data };
};

export default UseFetch;
