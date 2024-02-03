import React from "react";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFetch;
