import React from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Search from "./search";
import Gif from "./gif";
import GifList from "./gif_list";
// import { Grid } from "@giphy/react-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectGif = this.selectGif.bind(this);
    this.queryApi = this.queryApi.bind(this);

    this.state = {
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
      gifs: [],
    };
  }

  selectGif(id) {
    this.setState({ selectedGifId: id });
  }

  async queryApi(input) {
    const gifFetch = new GiphyFetch("r2Fhz06GIHSpGbXovtfCX5oxhGs03Mkv");
    try {
      const gifs = await gifFetch.search(input);
      const responseGifs = gifs.data.map((gif) => gif.id);
      this.setState({ gifs: responseGifs });
      console.log(gifs);
      return gifs;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { selectedGifId } = this.state;
    const { gifs } = this.state;
    return (
      <div className="app">
        <div className="left-scene">
          <div>
            <Search queryApi={this.queryApi} />
            <div>
              <Gif gifId={selectedGifId} selectGif={this.selectGif} />
            </div>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
