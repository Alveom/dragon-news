import React, { useEffect, useState } from "react";
import Category from "../../Components/Home/Category";
import ShortNews from "../../Components/Home/ShortNews";
import Navber from "../../Components/Header/Navber";
import News from "../../Components/Home/News";

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
    <div className="hide-scrollbar poppins">
      <Navber />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
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
        <div className="col-span-6">
          <h3 className="font-semibold">Dragon News Home</h3>
          <section id="main-news">
            <News />
          </section>
        </div>
        <div className="col-span-3">
          <h3>Login</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
