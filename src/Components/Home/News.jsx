import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { FaEye } from "react-icons/fa";

function News() {
  let { id } = useParams();
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  if (id == undefined) {
    id = 0;
  }
  useEffect(() => {
    try {
      fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/news.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);

  return (
    <div className="h-130 overflow-auto hide-scrollbar">
      {loading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : id == 0 ? (
        data.map(
          (news) => (
            <NavLink to={`/newspage/${news.id}`} key={news._id}>
              <div className="bg-gray-300 p-4 rounded-lg my-2">
                <div className="flex items-center gap-2 my-2">
                  <img
                    className="w-8 rounded-full"
                    src={news.author.img}
                    alt=""
                  />
                  <h3>{news.author.name}</h3>
                </div>
                <div>
                  <img
                    className="w-full h-60 object-cover rounded-lg"
                    src={news.image_url}
                    alt=""
                  />
                  <h3 className="font-bold my-2">{news.title}</h3>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <p>{news.author.published_date.split("T")[0]}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEye />
                    <p>{news.total_view}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ),
          []
        )
      ) : (
        data.map(
          (news) =>
            news.category_id == id ? (
              <NavLink to={`/newspage/${news.id}`} key={news._id}>
                <div className="bg-gray-300 p-4 rounded-lg my-2">
                  <div className="flex items-center gap-2 my-2">
                    <img
                      className="w-8 rounded-full"
                      src={news.author.img}
                      alt=""
                    />
                    <h3>{news.author.name}</h3>
                  </div>
                  <div>
                    <img
                      className="w-full h-60 object-cover rounded-lg"
                      src={news.image_url}
                      alt=""
                    />
                    <h3 className="font-bold my-2">{news.title}</h3>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div>
                      <p>{news.author.published_date.split("T")[0]}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEye />
                      <p>{news.total_view}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ) : (
              ""
            ),
          []
        )
      )}
    </div>
  );
}

export default News;
