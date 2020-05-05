import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Tabs from "../components/Tabs";

class Index extends Component {
  state = {
    coins: this.props.coins,
    favorites: [],
    count: 5,
    start: 0,
  };

  componentDidMount() {
    const res = fetch("http://localhost:3000/api/coins")
      .then((res) => res.json())
      .then((data) => this.setState({ favorites: data }));
  }

  fetchCoins = async () => {
    const { start, count } = this.state;
    this.setState({ start: start + count });
    const result = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=${this.state.start}&limit=${this.state.count}&currency=EUR`
    );
    const data = await result.json();
    this.setState({ coins: this.state.coins.concat(data.coins) });
  };

  render() {
    return (
      <Layout>
        <Tabs
          coins={this.state.coins}
          fetchCoins={this.fetchCoins}
          start={this.state.start}
        />
      </Layout>
    );
  }
}

Index.getInitialProps = async () => {
  const res = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR`
  );
  const data = await res.json();

  return {
    coins: data.coins,
  };
};

export default Index;
