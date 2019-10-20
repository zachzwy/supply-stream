import { useState, useEffect } from "react";
import axios from "axios";

import { TOKEN } from "../utility";

const useGeocoding = query => {
  const [dataList, setdataList] = useState([]);

  const fetchDataList = query => {
    if (query.trim() === "") {
      return;
    }
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${TOKEN}`;
    axios
      .get(url)
      .then(json => {
        if (json.data.features) {
          setdataList(json.data.features.map(place => place));
        }
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    setTimeout(() => fetchDataList(query), 2000);
  }, [query]);

  // console.log(dataList);
  return dataList;
};

export default useGeocoding;
