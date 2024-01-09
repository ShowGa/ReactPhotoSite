import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import Picture from "../Components/Picture";
import axios from "axios";

const HomePage = () => {
  // State
  let [data, setData] = useState(null);
  // Fetch state
  let [input, setInput] = useState("");
  // Page State
  let [page, setPage] = useState(1);
  // Current State => for the input search issue
  let [current, setCurrent] = useState("");
  // Notification message
  let [notiMessage, setNotiMessage] = useState("");
  const auth = process.env.REACT_APP_API_PIXEL;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;
  // Fetch Data
  const search = async (url) => {
    try {
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      setData(result.data.photos);
      setCurrent(input);
    } catch (e) {
      return;
    }
  };

  // morePicture button
  /*--------------------Closure Problem----------------*/
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (current === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${current}&page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  // useEffect => Load the picture at first
  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>More</button>
      </div>
    </div>
  );
};

export default HomePage;
