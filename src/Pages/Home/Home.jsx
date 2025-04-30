import React, { useEffect, useState } from "react";
import Category from "../../Components/Home/Category";
import ShortNews from "../../Components/Home/ShortNews";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newdata, setNewData] = useState([]);
  const [newloading, setNewLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/categories.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/news.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setNewData(data);
          setNewLoading(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setNewLoading(false);
    }
  }, []);

  return (
    <div className="hide-scrollbar  poppins">
      <section id="category-section">
        <h1 className="font-semibold py-4">All Categories</h1>
        <div className="h-60 overflow-y-scroll hide-scrollbar">
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            data.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
              />
            ))
          )}
        </div>
      </section>
      <section id="short-news" className="overflow-auto hide-scrollbar">
        <div className="h-60 overflow-y-scroll hide-scrollbar my-3">
          {newloading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            newdata.map((news) =>
              news.others.is_today_pick && news.others.is_trending ? (
                <ShortNews
                  key={news._id}
                  id={news.id}
                  newsid={news.id}
                  title={news.title}
                  image_url={news.image_url}
                  author={news.author}
                />
              ) : null
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
