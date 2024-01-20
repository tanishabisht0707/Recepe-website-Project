import { useEffect, useState } from "react";

function RecepeApi(SearchAnime,) { 
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchAnime}`)
      .then((res) => res.json())
      .then((res) => setData(res.meals));
  }, [SearchAnime,]);
  return data;
}

export default RecepeApi;
