import React from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Search from "./search";
import Gif from "./gif";
import GifList from "./gif_list";
import GifInfo from "./gif_info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectGif = this.selectGif.bind(this);
    this.queryApi = this.queryApi.bind(this);

    this.state = {
      selectedGifUrl: "https://media.giphy.com/media/RiEW6mSQqjRiDy51MI/giphy.gif",
      selectedGifWidth: 640,
      selectedGifHeight: 640,
      gifs: [],
    };
  }

  selectGif(url, width, height) {
    this.setState({ selectedGifUrl: url });
    this.setState({ selectedGifWidth: width });
    this.setState({ selectedGifHeight: height });
  }

  async queryApi(input) {
    const gifFetch = new GiphyFetch("r2Fhz06GIHSpGbXovtfCX5oxhGs03Mkv");
    try {
      const gifs = await gifFetch.search(input);
      const responseGifs = gifs.data.map((gif) => gif.images.original);
      this.setState({ gifs: responseGifs });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { gifs } = this.state;
    const { selectedGifUrl } = this.state;
    const { selectedGifWidth } = this.state;
    const { selectedGifHeight } = this.state;
    return (
      <div className="app">
        <div className="left-scene">
          <Search queryApi={this.queryApi} />
          <div className="select-gif">
            <Gif
              gifUrl={selectedGifUrl}
              gifWidth={selectedGifWidth}
              gifHeight={selectedGifHeight}
              selectGif={this.selectGif}
            />
            <GifInfo gifUrl={selectedGifUrl} gifWidth={selectedGifWidth} gifHeight={selectedGifHeight} />
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
