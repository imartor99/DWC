import { useState, useEffect } from "react";

const useGet = (url) => {
  const [data, setData] = useSate([]);
t
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error en petición:", err));
  }, [url]);

  return { data };
};

export default useGet;
