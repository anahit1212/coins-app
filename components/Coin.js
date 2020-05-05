import Link from "next/link";

const Coin = (props) => {
  const { coin } = props;

  return (
    <Link key={coin.id} href="/coins/[id]" as={`/coins/${coin.id}`}>
      <a>
        <div style={{ marginTop: "60px" }}>
          <img
            src={coin.icon}
            alt={coin.name}
            style={{ width: "20px", height: "20px" }}
          />
          {coin.name}
          {coin.symbol}
          {coin.priceChange1d}
          {coin.price}
          {coin.priceBtc}
          {coin.marketCap}
          {coin.volume}
        </div>
      </a>
    </Link>
  );
};

export default Coin;
