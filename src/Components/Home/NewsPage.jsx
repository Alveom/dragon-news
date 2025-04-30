import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function NewsPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/news.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setUser(data.find((user) => user.id === id));
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);
  console.log(data);

  return (
    <div>
      <h1 className="font-bold my-1">Dragon news</h1>
      {loading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : (
        <>
          <img
            src={user.image_url}
            className="h-80 w-full rounded-lg object-cover"
            alt="image"
          />
          <h1 className="font-bold text-xl my-2">{user.title}</h1>
          <p className="font-light">{user.details}</p>
        </>
      )}
      <Link to={"/"}>
        <button className="btn bg-[#D72050] text-white my-4 rounded-lg">
          All News
        </button>
      </Link>
    </div>
  );
}

export default NewsPage;
