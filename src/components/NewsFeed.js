import { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://crypto-news-live.p.rapidapi.com/news",
  headers: {
    "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
    "x-rapidapi-key": "c6f976e248mshe6bc768cf0dfd6fp167445jsn111e3ac2ff2e",
  },
};

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <aside className="news-feed">
        <h2>News Feed</h2>
        {newsData?.slice(0,100).map(({source, title, url}, index) => {
            return(
                <div key={`${title}_${index}`}>
                    <h4>{title}</h4>
                    <a href={url} target="_blank" rel="noreferrer">Read More on <b>{source}</b></a>
                </div>
            )
        })}
    </aside>
  );
};

export default NewsFeed;
