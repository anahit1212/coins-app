import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default (props) => {
  const [coinData, setCoinData] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();
  useEffect(() => {
    fetchJson(
      `https://api.coinstats.app/public/v1/coins/${router.query.id}?currency=AMD`
    ).then((data) => {
      return setCoinData(data.coin);
    });
  }, []);

  const handleFavorite = () => {
    if (!favorite) {
      addToFavorites();
    } else {
      removeFromFavorites();
    }

    setFavorite(!favorite);
  };

  const addToFavorites = async () => {
    const res = await fetchJson("http://localhost:3000/api/coins", {
      method: "POST",
      body: JSON.stringify({ _id: router.query.id }),
    });
  };

  const removeFromFavorites = async () => {
    const res = await fetchJson(
      `http://localhost:3000/api/coins/${router.query.id}`,
      {
        method: "GET",
      }
    );
  };

  return (
    <Layout>
      <div>Coin's details page</div>
      {coinData ? (
        <div>here is data: {coinData.id}</div>
      ) : (
        <div>there is no data</div>
      )}
      <button
        style={{ color: `${favorite ? "green" : "red"}` }}
        onClick={handleFavorite}
      >
        {favorite ? "Remove from favorires" : "Make favorite"}
      </button>
    </Layout>
  );
};
